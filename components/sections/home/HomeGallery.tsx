import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/roofing-projects/active-roofing-project-18.jpg', alt: 'Active Roofing Inc. roof project photo 18' },
  { src: '/images/roofing-projects/active-roofing-project-17.jpg', alt: 'Active Roofing Inc. roof project photo 17' },
  { src: '/images/roofing-projects/active-roofing-project-16.jpg', alt: 'Active Roofing Inc. roof project photo 16' },
  { src: '/images/roofing-projects/active-roofing-project-15.jpg', alt: 'Active Roofing Inc. roof project photo 15' },
  { src: '/images/roofing-projects/active-roofing-project-14.jpg', alt: 'Active Roofing Inc. roof project photo 14' },
  { src: '/images/roofing-projects/active-roofing-project-13.jpg', alt: 'Active Roofing Inc. roof project photo 13' },
  { src: '/images/roofing-projects/active-roofing-project-12.jpg', alt: 'Active Roofing Inc. roof project photo 12' },
  { src: '/images/roofing-projects/active-roofing-project-11.jpg', alt: 'Active Roofing Inc. roof project photo 11' },
  { src: '/images/roofing-projects/active-roofing-project-10.jpg', alt: 'Active Roofing Inc. roof project photo 10' },
  { src: '/images/roofing-projects/active-roofing-project-09.jpg', alt: 'Active Roofing Inc. roof project photo 9' },
  { src: '/images/roofing-projects/active-roofing-project-08.jpg', alt: 'Active Roofing Inc. roof project photo 8' },
  { src: '/images/roofing-projects/active-roofing-project-07.jpg', alt: 'Active Roofing Inc. roof project photo 7' },
  { src: '/images/roofing-projects/active-roofing-project-06.jpg', alt: 'Active Roofing Inc. roof project photo 6' },
  { src: '/images/roofing-projects/active-roofing-project-05.jpg', alt: 'Active Roofing Inc. roof project photo 5' },
  { src: '/images/roofing-projects/active-roofing-project-04.jpg', alt: 'Active Roofing Inc. roof project photo 4' },
  { src: '/images/roofing-projects/active-roofing-project-03.jpg', alt: 'Active Roofing Inc. roof project photo 3' },
  { src: '/images/roofing-projects/active-roofing-project-02.jpg', alt: 'Active Roofing Inc. roof project photo 2' },
  { src: '/images/roofing-projects/active-roofing-project-01.jpg', alt: 'Active Roofing Inc. roof project photo 1' }
];

export default function HomeGallery() {
  return (
    <section id="galeria-de-servicos" className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1C252B] block mb-2 font-medium uppercase tracking-wider">
            Active Roofing Inc.
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C252B]">Roofing projects</h2>
          <p className="mt-3 max-w-2xl font-body text-15 leading-relaxed text-forest-light">Project photos shared by Active Roofing Inc.</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={`${item.src}-${index}`}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F4F6F7] overflow-hidden border border-[#D9DEE2] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={`${item.src}-${index}`}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F4F6F7] overflow-hidden border border-[#D9DEE2] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
