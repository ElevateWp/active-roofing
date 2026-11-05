import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Roofing projects
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Roofing work from the team
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              A selection of roofing project photos shared by Active Roofing Inc.
            </p>
            <Link
              href="/roof-repair/"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Explore our services →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/roofing-projects/active-roofing-project-11.jpg"
                  alt="Active Roofing Inc. roof project photo"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#00B878]/90 text-[#1C252B] font-body text-12 px-3 py-1">
                  Project photo
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/roofing-projects/active-roofing-project-15.jpg"
                  alt="Active Roofing Inc. roof project photo"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#00B878]/90 text-[#1C252B] font-body text-12 px-3 py-1">
                  Project photo
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
