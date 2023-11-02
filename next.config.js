/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["tecdn.b-cdn.net", "firebasestorage.googleapis.com"]
    }
}

module.exports = nextConfig
