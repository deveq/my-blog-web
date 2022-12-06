/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // url의 끝이 슬래시로 끝나도록함
  // trailingSlash: true,

  // process.env.xxx로 사용할 수 있음
  env: {
    SANITY_PROJECT_ID: 'hud4d04a',
  },
};

module.exports = nextConfig;
