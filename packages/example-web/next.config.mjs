/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ui',
        destination: '/ui/components',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
