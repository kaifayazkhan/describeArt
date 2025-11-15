const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'tecdn.b-cdn.net',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

module.exports = nextConfig;
