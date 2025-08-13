/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  images: {
    unoptimized: isGithubPages, // Needed for GitHub Pages
  },
  basePath: isGithubPages ? "/alfredos-glass" : "", // change to your repo name
  assetPrefix: isGithubPages ? "/alfredos-glass/" : "",
};

module.exports = nextConfig;
