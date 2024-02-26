module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};
