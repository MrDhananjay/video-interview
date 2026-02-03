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
  },
  {
    number: "02",
    icon: Users,
    title: 'Schedule Seamlessly',
    description: 'Pick a time that works across any timezone. Send invites with one click.',
  },
  {
    number: "03",
    icon: Video,
    title: 'Let AI Do the Interviewing',
    description: 'Your AI interviewer connects with candidates in real-time, asks tailored questions, and evaluates responses instantly.',
  },
  {
    number: "04",
    icon: CheckCircle,
    title: 'Review & Decide',
    description: 'Access recordings, get comprehensive feedback reports immediately. Share insights with your team.',
  },
];

export function HowItWorksSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const reportRef = useRef(null);

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

    // Content animation
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            once: true,
          }
        }
      );
    }

    // Report image animation
    if (reportRef.current) {
      gsap.fromTo(reportRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reportRef.current,
            start: "top 80%",
            once: true,
          }
        }
      );
    }
  }, { scope: containerRef });

  // Split steps into two groups
  const firstTwoSteps = steps.slice(0, 2);
  const lastTwoSteps = steps.slice(2, 4);

  const StepCard = ({ step, index }) => (
    <div className="group relative bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100/50 hover:-translate-y-1">
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#0B5CD5]/[0.05] group-hover:bg-[#0B5CD5]/10 transition-colors duration-300">
            <step.icon className="text-[#0B5CD5]" size={24} strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold text-gray-200 select-none group-hover:text-[#0B5CD5]/20 transition-colors duration-300 font-mono">
            {step.number}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#0B5CD5] transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm flex-grow">
          {step.description}
        </p>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} id="how-it-works" className="py-24 bg-[#F8F9FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-5xl mx-auto mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            How It Works
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Streamline your hiring process with our intelligent automation.
            From upload to offer, we handle the heavy lifting.
          </p>
        </div>


        {/* Main Content: Steps + Report Image */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Desktop Layout: 3-column grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column: Steps 1-2 */}
            <div className="space-y-6">
              {firstTwoSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>

            {/* Center Column: Report Image */}
            <div ref={reportRef} className="flex justify-center opacity-0">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl blur-2xl"></div>
                <div className="relative" style={{ maxHeight: '500px' }}>
                  {/* Original image */}
                  <img
                    src="/report.svg"
                    alt="AI-Generated Technical Assessment Report"
                    className="relative rounded-2xl shadow-2xl max-w-full h-auto border border-gray-200/50"
                    style={{ maxHeight: '500px', width: 'auto' }}
                  />
                  {/* Blurred bottom half overlay */}
                  <img
                    src="/report.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-0 left-0 rounded-2xl max-w-full h-auto"
                    style={{
                      maxHeight: '500px',
                      width: '100%',
                      filter: 'blur(6px)',
                      clipPath: 'inset(50% 0 0 0)'
                    }}
                  />
                </div>
                {/* Caption */}
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                  AI-Generated Assessment Report
                </p>
              </div>
            </div>

            {/* Right Column: Steps 3-4 */}
            <div className="space-y-6">
              {lastTwoSteps.map((step, index) => (
                <StepCard key={index + 2} step={step} index={index + 2} />
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout: Stacked */}
          <div className="lg:hidden space-y-8">
            {/* First two steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {firstTwoSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>

            {/* Report Image */}
            <div className="flex justify-center py-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl blur-2xl"></div>
                <div className="relative" style={{ maxHeight: '400px' }}>
                  {/* Original image */}
                  <img
                    src="/report.svg"
                    alt="AI-Generated Technical Assessment Report"
                    className="relative rounded-2xl shadow-xl max-w-full h-auto border border-gray-200/50"
                    style={{ maxHeight: '400px', width: 'auto' }}
                  />
                  {/* Blurred bottom half overlay */}
                  <img
                    src="/report.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-0 left-0 rounded-2xl max-w-full h-auto"
                    style={{
                      maxHeight: '400px',
                      width: '100%',
                      filter: 'blur(6px)',
                      clipPath: 'inset(50% 0 0 0)'
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                  AI-Generated Assessment Report
                </p>
              </div>
            </div>

            {/* Last two steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lastTwoSteps.map((step, index) => (
                <StepCard key={index + 2} step={step} index={index + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
