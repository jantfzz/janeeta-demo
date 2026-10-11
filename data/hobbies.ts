// Content for /hobbies. Everything here is safe to edit.
// Empty lists show a friendly "coming soon" note instead of an empty box.

export const hobbiesIntro = {
  title: "Happiest outdoors.",
  text: "Most of my free time is spent outside: road runs through Bandung, trail runs and mountain trips like the summit of Mt. Burangrang, and racket games with friends. When I'm not moving, I'm usually lost in a fantasy or mystery novel.",
};

// ---------- Running ----------
// Snapshot copied from my Strava profile. Update the numbers whenever you like.
export const strava = {
  url: "https://www.strava.com/athletes/107550573",
  asOf: "11 Oct 2026",
  location: "Bandung",
  activitiesLast4Weeks: 21,
  activitiesPerWeek: 4,
  avgDistancePerWeekKm: 35.6,
  // Moving time per week, oldest first (hours as decimals). The last week is still in progress.
  weeklyHours: [
    { week: "4 weeks ago", hours: 8 + 20 / 60, label: "8h 20m" },
    { week: "3 weeks ago", hours: 6 + 28 / 60, label: "6h 28m" },
    { week: "Last week", hours: 9 + 12 / 60, label: "9h 12m" },
    { week: "This week", hours: 2 + 26 / 60, label: "2h 26m" },
  ],
  // Fastest-time achievements on local segments.
  segments: [
    { name: "Satu Lap Saraga", result: "2nd fastest", time: "2:15" },
    { name: "Lurus Simpang Dago – Medeka", result: "2nd fastest", time: "28:36" },
    { name: "Aceh/Wastu – Wastu/Martadinata – Djuanda/Prabu Dimuntur", result: "2nd fastest", time: "14:35" },
    { name: "Juanda Down", result: "2nd fastest", time: "9:36" },
  ],
};

export const runningStyles = [
  { title: "Road running", text: "City loops and long runs around Bandung, mostly logged on Strava." },
  { title: "Trail running", text: "Hills, forest paths and mountain routes around West Java." },
];

// Races go here: { name, date, distance, time, note }. Leave empty until you add them.
export const races: { name: string; date: string; distance: string; time?: string; note?: string }[] = [];

// Strava challenges completed (shown as milestones under "Race").
export const challenges = [
  { name: "August Run 100K Challenge", date: "Aug 2026", distance: "100 km" },
  { name: "Runna August Ten Days Active Challenge", date: "Aug 2026", distance: "10 active days" },
  { name: "adidas: Run Hyper", date: "Aug 2026", distance: "Challenge" },
  { name: "May Half Marathon Challenge", date: "May 2026", distance: "21.1 km" },
  { name: "April 10K Challenge", date: "Apr 2026", distance: "10 km" },
];

export const community = [
  { title: "Selarinya", role: "Talent / brand ambassador", text: "Recruited as a talent and brand ambassador for the running-gear brand." },
  { title: "Strava clubs", role: "Member of 5 clubs", text: "Running clubs and communities I train and share runs with." },
];

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
