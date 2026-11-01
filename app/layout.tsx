import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import SiteTextReveal from '@/components/motion/SiteTextReveal';
import JsonLd from '@/components/ui/JsonLd';
import { BASE_URL, generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'JNF Plumbing Cairns | Cairns plumber',
    template: '%s',
  },
  description:
    'JNF Plumbing Cairns provides emergency plumbing, leak repairs, hot water systems and drainage services across Cairns. Call +61 417 890 910.',
  keywords: [
    'JNF Plumbing Cairns',
    'plumbing repairs Cairns',
    'blocked drain clearing Cairns and surrounding areas',
    'hot water system repairs Cairns',
    'leak repairs Cairns',
  ],
  authors: [{ name: 'JNF Plumbing Cairns' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon-32.png', type: 'image/png' }],
    apple: [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#F3F6FA] selection:text-[#101828]">
        <PagePreloader />
        <SiteTextReveal />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[88px] sm:pt-[100px] md:pt-[112px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
