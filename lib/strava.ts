// Live Strava numbers for /hobbies.
//
// How it works: on the server, the site trades a long-lived refresh token for a short-lived
// access token, then reads the athlete's running totals and latest runs from the Strava API.
// Results are cached and refreshed at most once an hour (ISR), so visitors never hit Strava
// directly and the API rate limit is safe.
//
// Setup (once): add these Environment Variables in Vercel → Project → Settings:
//   STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN
// See README.md → "Strava live stats" for how to get them.
// If they're missing or Strava is unreachable, the page falls back to the snapshot in data/hobbies.ts.

export const STRAVA_ATHLETE_ID = "107550573";
const REVALIDATE_SECONDS = 60 * 60;

type Totals = { count: number; distance: number; moving_time: number; elevation_gain: number };

export type StravaRun = {
  name: string;
  date: string;
  distanceKm: number;
  movingTime: number;
  elevation: number;
  type: string;
};

export type StravaLive = {
  recent: Totals; // last 4 weeks
  ytd: Totals;
  all: Totals;
  latest: StravaRun[];
  fetchedAt: string;
};

async function getAccessToken(): Promise<string | null> {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) return null;
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

export async function getStravaLive(): Promise<StravaLive | null> {
  try {
    const token = await getAccessToken();
    if (!token) return null;
    const headers = { Authorization: `Bearer ${token}` };
    const [statsRes, actRes] = await Promise.all([
      fetch(`https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch("https://www.strava.com/api/v3/athlete/activities?per_page=10", {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
    ]);
    if (!statsRes.ok) return null;
    const stats = await statsRes.json();
    const acts: Array<Record<string, unknown>> = actRes.ok ? await actRes.json() : [];
    const latest = acts
      .filter((a) => String(a.sport_type ?? a.type).includes("Run"))
      .slice(0, 4)
      .map((a) => ({
        name: String(a.name ?? "Run"),
        date: String(a.start_date_local ?? a.start_date ?? ""),
        distanceKm: Number(a.distance ?? 0) / 1000,
        movingTime: Number(a.moving_time ?? 0),
        elevation: Number(a.total_elevation_gain ?? 0),
        type: String(a.sport_type ?? a.type ?? "Run"),
      }));
    return {
      recent: stats.recent_run_totals,
      ytd: stats.ytd_run_totals,
      all: stats.all_run_totals,
      latest,
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function formatDuration(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export function formatPace(seconds: number, km: number) {
  if (!km) return "–";
  const s = Math.round(seconds / km);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}/km`;
}
