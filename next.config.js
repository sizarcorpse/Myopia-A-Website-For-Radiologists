module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_API_URL: process.env.NEXT_API_URL,
    CLOUD_URL: process.env.CLOUD_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_PRESET: process.env.CLOUD_PRESET,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
  },
  images: {
    domains: [
      "images.prismic.io",
      "myopia.cdn.prismic.io",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
};
