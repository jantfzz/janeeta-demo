// Content for /hobbies. Everything here is safe to edit.
// Empty lists show a friendly "coming soon" note instead of an empty box.

export const hobbiesIntro = {
  title: "Happiest outdoors.",
  text: "Most of my free time is spent outside: road runs through Bandung, trail runs and mountain trips like the summit of Mt. Burangrang, and racket games with friends. When I'm not moving, I'm usually lost in a fantasy or mystery novel.",
};

// ---------- Running ----------
// Fallback numbers, shown only when the live Strava connection isn't set up (see lib/strava.ts).
export const strava = {
  url: "https://www.strava.com/athletes/107550573",
  asOf: "11 Oct 2026",
  location: "Bandung",
  activitiesLast4Weeks: 21,
  activitiesPerWeek: 4,
  avgDistancePerWeekKm: 35.6,
};

export const runningStyles = [
  { title: "Road running", text: "City loops and long runs around Bandung, mostly logged on Strava." },
  { title: "Trail running", text: "Hills, forest paths and mountain routes around West Java." },
];

// Races, newest first. photo is optional (put files in /public/races/).
export type Race = {
  name: string;
  date: string;
  kind: "Road" | "Trail" | "Pacer";
  category: string;
  distanceKm: number;
  time: string;
  pace?: string;
  elevation?: string;
  note?: string;
  photo?: string;
};

export const races: Race[] = [
  { name: "Bukit Bintang Trail Run", date: "2026", kind: "Trail", category: "Trail", distanceKm: 15.03, time: "2h 44m", elevation: "808 m gain", photo: "/races/bukit-bintang-2026.jpg" },
  { name: "Tahura Trail Run", date: "2026", kind: "Trail", category: "Trail", distanceKm: 12.21, time: "2h 05m", elevation: "467 m gain", photo: "/races/tahura-2026.jpg" },
  { name: "BTN Jakarta International Marathon", date: "2026", kind: "Road", category: "Half marathon", distanceKm: 21.2, time: "2h 40m", pace: "7:35/km", photo: "/races/btn-jakim-2026.jpg" },
  { name: "Telkomsel Digiland Run", date: "2026", kind: "Road", category: "Half marathon", distanceKm: 21.24, time: "2h 37m", pace: "7:24/km", photo: "/races/digiland-2026.jpg" },
  { name: "Bedug Night Run", date: "8 Mar 2026", kind: "Pacer", category: "5K · pacer", distanceKm: 5.55, time: "35m 10s", pace: "6:20/km", note: "Pacer duty with Selarinya Recreation Club", photo: "/races/bedug-2026.jpg" },
  { name: "Indonesia Women's Run", date: "5 Oct 2025", kind: "Road", category: "10K", distanceKm: 10.43, time: "1h 05m 45s", pace: "6:18/km", note: "Podium: 3rd place, Open Female", photo: "/races/iwr-2025.jpg" },
  { name: "Earth Run", date: "2025", kind: "Road", category: "10K", distanceKm: 9.87, time: "1h 04m", pace: "6:27/km", photo: "/races/earth-run-2025.jpg" },
  { name: "Pocari Sweat Run", date: "19 Jul 2025", kind: "Road", category: "10K", distanceKm: 10.01, time: "1h 06m", pace: "6:38/km", photo: "/races/pocari-2025.jpg" },
];

// Personal bests shown above the race list.
export const personalBests = [
  { label: "5K", value: "27:11", detail: "5:26/km" },
  { label: "10K", value: "1:05:45", detail: "Indonesia Women's Run" },
  { label: "Half marathon", value: "2:37", detail: "Telkomsel Digiland Run" },
  { label: "Trail climb", value: "808 m", detail: "Bukit Bintang, 15 km" },
];

// Strava challenges completed (shown as milestones under "Race").
export const challenges = [
  { name: "August Run 100K Challenge", date: "Aug 2026", distance: "100 km" },
  { name: "Runna August Ten Days Active Challenge", date: "Aug 2026", distance: "10 active days" },
  { name: "adidas: Run Hyper", date: "Aug 2026", distance: "Challenge" },
  { name: "May Half Marathon Challenge", date: "May 2026", distance: "21.1 km" },
  { name: "April 10K Challenge", date: "Apr 2026", distance: "10 km" },
];

// Running communities, names only.
export const community = ["Selarinya Recreation Club", "Strava running clubs"];

// ---------- Writing & photography ----------
export const writing = [
  { platform: "Medium", handle: "@janeetafz", url: "https://medium.com/@janeetafz", icon: "medium" as const, text: "Longer essays and write-ups." },
  { platform: "Substack", handle: "@jantfzz", url: "https://substack.com/@jantfzz", icon: "substack" as const, text: "Notes and newsletter posts." },
];

export const photography = {
  handle: "@helium.jump",
  url: "https://www.instagram.com/helium.jump/",
  text: "Where I share my photography and the moments I document.",
};

// ---------- Racket sports ----------
export const racketSports = [
  { title: "Tennis", text: "Rallies, footwork and a good sweat." },
  { title: "Padel", text: "Doubles games with friends on glass-walled courts." },
  { title: "Pickleball", text: "Quick, playful games that are easy to pick up." },
];

// ---------- Books ----------
export const bookGenres = ["Fantasy", "Sci-fi", "Thriller", "Mystery"];
// Add books like: { title: "…", author: "…", genre: "Fantasy", note: "…" }
export const books: { title: string; author: string; genre: string; note?: string }[] = [];

// ---------- Movies & songs ----------
// Add yours like: { title: "…", by: "…" }
export const movies: { title: string; by?: string }[] = [];
export const songs: { title: string; by?: string }[] = [];
