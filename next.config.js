/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true,
      },
      
    ]
  },
}



module.exports = nextConfig


