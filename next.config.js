/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com"], // Add the domain you want to allow
  },
  env: {
    API_URL: "https://localhost:5000",
  },
};

module.exports = nextConfig;
