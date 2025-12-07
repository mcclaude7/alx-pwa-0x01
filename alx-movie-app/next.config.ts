// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   reactStrictMode: true,
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    domains: [
      "m.media-amazon.com", // add any external domains you need
      // "image.tmdb.org",  // example of another movie API domain
    ],
  },
};

export default nextConfig;
