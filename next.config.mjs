const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/about', destination: '/about-roofing/', permanent: true },
      { source: '/services', destination: '/roofing-services/', permanent: true },
      { source: '/reviews', destination: '/roofing-reviews/', permanent: true },
      { source: '/team/:path*', destination: '/roofing-team/:path*', permanent: true },
      { source: '/quote', destination: '/roofing-quote/', permanent: true },
      { source: '/contact', destination: '/contact-roofing/', permanent: true },
      { source: '/plumbing-advice/:path*', destination: '/roofing-advice/:path*', permanent: true },
      { source: '/emergency-plumbing', destination: '/roof-repair/', permanent: true },
      { source: '/gas-fitting', destination: '/roof-installation/', permanent: true },
      { source: '/hot-water-systems', destination: '/roof-replacement/', permanent: true },
      { source: '/leak-repairs', destination: '/roof-leak-repair/', permanent: true },
      { source: '/blocked-drains', destination: '/roof-inspections/', permanent: true },
      { source: '/bathroom-plumbing', destination: '/roof-maintenance/', permanent: true },
      { source: '/kitchen-plumbing', destination: '/storm-damage-roof-repair/', permanent: true },
      { source: '/plumbing-renovations', destination: '/roof-installation/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
