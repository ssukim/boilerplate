/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mode: process.env.MODE,
  },
  publicRuntimeConfig: {
    giphyApiKey: process.env.GIPHY_API_KEY,
  },
};
