/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/leak-detection-and-repairs', destination: '/leak-repairs/', permanent: true },
      { source: '/blocked-drains-and-toilets', destination: '/blocked-drains/', permanent: true },
      { source: '/bathroom-and-kitchen-plumbing', destination: '/bathroom-plumbing/', permanent: true },
      { source: '/stormwater-and-pump-services', destination: '/emergency-plumbing/', permanent: true },
      { source: '/roof-plumbing-and-leak-inspections', destination: '/leak-repairs/', permanent: true },
      { source: '/pre-purchase-plumbing-inspections', destination: '/plumbing-renovations/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
