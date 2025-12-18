// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   reactStrictMode: true,
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   reactCompiler: true,
//   images: {
//     domains: [
//       "m.media-amazon.com", // add any external domains you need
//       // "image.tmdb.org",  // example of another movie API domain
//     ],
//   },
// };

// export default nextConfig;

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPWA({
  ...nextConfig
})
