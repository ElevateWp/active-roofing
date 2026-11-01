/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/roofing-services', destination: '/services/', permanent: true },
      { source: '/full-re-roofing', destination: '/emergency-plumbing/', permanent: true },
      { source: '/roof-inspections', destination: '/roof-plumbing-and-leak-inspections/', permanent: true },
      { source: '/roof-restoration', destination: '/emergency-plumbing/', permanent: true },
      { source: '/roof-repairs', destination: '/leak-detection-and-repairs/', permanent: true },
      { source: '/roof-cleaning', destination: '/blocked-drains-and-toilets/', permanent: true },
      { source: '/roof-painting', destination: '/hot-water-systems/', permanent: true },
      { source: '/roof-repointing', destination: '/bathroom-and-kitchen-plumbing/', permanent: true },
      { source: '/roof-tile-repairs', destination: '/leak-detection-and-repairs/', permanent: true },
      { source: '/roofing-advice/:path*', destination: '/plumbing-advice/:path*', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
