"use client";
import { useRef } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const VasiArtwork = "/vasi-interview.svg";

export function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.2"
      )
      .fromTo(imageRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
        "-=0.8"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br overflow-hidden pt-24" style={{ backgroundImageV: 'linear-gradient(to bottom right, white, #F8F9FA, white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0" style={{ color: '#000000ff' }}>
                Next Gen Video Interviews
              </h1>
              <p ref={textRef} className="text-lg sm:text-xl leading-relaxed opacity-0" style={{ color: '#2D3748' }}>
                Experience intelligent, personalized interviews that go beyond generic questions. Connect with candidates in real-time and make better hiring decisions faster.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
              <button className="px-8 py-4 rounded-lg border-none shadow-lg flex items-center justify-center gap-2 group cursor-pointer transition-all text-lg font-regular hover:shadow-xl hover:scale-105" style={{ backgroundColor: '#F4A940', color: 'white' }}>
                Start Interviewing Today
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="opacity-0">
                <div className="text-3xl font-bold" style={{ color: '#0A337A' }}>50K+</div>
                <div className="text-sm" style={{ color: '#2D3748' }}>Interviews</div>
              </div>
              <div className="opacity-0">
                <div className="text-3xl font-bold" style={{ color: '#0A337A' }}>2,500+</div>
                <div className="text-sm" style={{ color: '#2D3748' }}>Companies</div>
              </div>
              <div className="opacity-0">
                <div className="text-3xl font-bold" style={{ color: '#0A337A' }}>98%</div>
                <div className="text-sm" style={{ color: '#2D3748' }}>Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div ref={imageRef} className="relative mx-auto lg:ml-auto opacity-0" style={{ width: '380px' }}>
              <ImageWithFallback
                src={VasiArtwork}
                alt="Video Interview Platform"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}