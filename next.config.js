module.exports = {
  images: {
    deviceSizes: [320, 360, 414, 540, 960, 1024, 1366, 1920],
  },
  reactStrictMode: true,
  env: {
    NEXT_APP_GITHUB_AUTH_TOKEN: process.env.NEXT_APP_GITHUB_AUTH_TOKEN
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
