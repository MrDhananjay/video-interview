"use client";
import { useRef } from 'react';
import { Calendar, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: 'Upload & Analyze',
    description: 'Add the job description and candidate resume. Our AI instantly creates personalized interview questions.',
    color: '#3B82F6', // Blue
    bgColor: 'rgba(59, 130, 246, 0.1)'
  },
  {
    number: "02",
    icon: Users,
    title: 'Schedule Seamlessly',
    description: 'Pick a time that works across any timezone. Send invites with one click.',
    color: '#8B5CF6', // Purple
    bgColor: 'rgba(139, 92, 246, 0.1)'
  },
  {
    number: "03",
    icon: Video,
    title: 'Let AI Do the Interviewing',
    description: 'Your AI interviewer connects with candidates in real-time, asks tailored questions, and evaluates responses instantly.',
    color: '#F59E0B', // Amber
    bgColor: 'rgba(245, 158, 11, 0.1)'
  },
  {
    number: "04",
    icon: CheckCircle,
    title: 'Review & Decide',
    description: 'Access recordings, get comprehensive feedback reports immediately. Share insights with your team.',
    color: '#10B981', // Emerald
    bgColor: 'rgba(16, 185, 129, 0.1)'
  },
];

export function HowItWorksSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        }
      }
    );

    // Cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="how-it-works" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-20 opacity-0">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 tracking-wide uppercase">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Streamline your hiring process with our intelligent automation.
            From upload to offer, we handle the heavy lifting.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-200 z-0 transform -translate-y-1/2"></div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Header with Icon and Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.bgColor }}>
                    <step.icon style={{ color: step.color }} size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 select-none group-hover:text-gray-200 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {step.description}
                </p>

                {/* Bottom decorative line */}
                <div className="w-12 h-1 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: step.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            Start Your Free Trial
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
