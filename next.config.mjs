/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  // Vercel uses the normal build (optimized images).
  // `npm run export` makes a static copy in /out for any static host.
  ...(isExport ? { output: "export", trailingSlash: true, images: { unoptimized: true } } : {}),
};

export default nextConfig;
