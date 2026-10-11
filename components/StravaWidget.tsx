import { strava } from "@/data/hobbies";
import { formatDuration, formatPace, getStravaLive } from "@/lib/strava";
import { Icon } from "./Icons";
import { Arrow } from "./ui";

const km = (m: number) => (m / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 });

// Server component: live numbers from Strava when configured, otherwise the snapshot in data/hobbies.ts.
export default async function StravaWidget() {
  const live = await getStravaLive();

  const tiles = live
    ? [
        { value: String(live.recent.count), label: "runs, last 4 weeks" },
        { value: `${km(live.recent.distance)} km`, label: "distance, last 4 weeks" },
        { value: formatDuration(live.recent.moving_time), label: "moving time, last 4 weeks" },
        { value: `${Math.round(live.recent.elevation_gain)} m`, label: "elevation, last 4 weeks" },
        { value: `${km(live.ytd.distance)} km`, label: `this year · ${live.ytd.count} runs` },
        { value: `${km(live.all.distance)} km`, label: `all time · ${live.all.count} runs` },
      ]
    : [
        { value: String(strava.activitiesLast4Weeks), label: "activities, last 4 weeks" },
        { value: String(strava.activitiesPerWeek), label: "activities / week" },
        { value: `${strava.avgDistancePerWeekKm} km`, label: "avg distance / week" },
      ];

  const updated = live
    ? new Date(live.fetchedAt).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }) + " WIB"
    : strava.asOf;

  return (
    <div className="overflow-hidden rounded-2xl bg-ink text-bg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bg/15 px-6 py-4">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
          <Icon name="strava" size={16} className="text-[#fc5200]" />
          Strava · {strava.location}
        </p>
        <p className="flex items-center gap-2 text-xs opacity-75">
          <span className={`h-2 w-2 rounded-full ${live ? "animate-pulse bg-[#7bd88f]" : "bg-bg/40"}`} aria-hidden="true" />
          {live ? `Live · updated ${updated}` : `Snapshot · ${updated}`}
        </p>
      </div>

      <dl className={`grid grid-cols-2 gap-px bg-bg/10 ${live ? "md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-3"}`}>
        {tiles.map((t) => (
          <div key={t.label} className="flex flex-col-reverse bg-ink px-6 py-5">
            <dt className="mt-1 text-xs opacity-70">{t.label}</dt>
            <dd className="font-display text-3xl">{t.value}</dd>
          </div>
        ))}
      </dl>

      {live && live.latest.length > 0 && (
        <div className="border-t border-bg/15 px-6 py-5">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Latest runs</p>
          <ul className="mt-3 divide-y divide-bg/10">
            {live.latest.map((r) => (
              <li key={r.date + r.name} className="grid grid-cols-[1fr_auto] gap-x-4 py-2.5 text-sm sm:grid-cols-[1fr_90px_90px_90px]">
                <span className="truncate">
                  {r.name}
                  <span className="block text-xs opacity-60">
                    {new Date(r.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} · {r.type.replace("TrailRun", "Trail run")}
                  </span>
                </span>
                <span className="text-right font-mono text-xs sm:self-center">{r.distanceKm.toFixed(2)} km</span>
                <span className="hidden text-right font-mono text-xs opacity-80 sm:block sm:self-center">{formatDuration(r.movingTime)}</span>
                <span className="hidden text-right font-mono text-xs opacity-80 sm:block sm:self-center">{formatPace(r.movingTime, r.distanceKm)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="px-6 pb-6 pt-2">
        <a
          href={strava.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-bg px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-accent hover:text-accent-ink"
        >
          Follow me on Strava <Arrow />
        </a>
      </div>
    </div>
  );
}
