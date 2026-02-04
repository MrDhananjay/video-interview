"use client";
import { useRef } from 'react';
import { Video, Clock, Shield, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Pastel color palette for tags
const tagColors = {
  purple: '#FFCC80', // Changed to Orange-300
  yellow: '#FDE68A',
  pink: '#FBCFE8',
  lavender: '#FFEDD5', // Orange-100 (Light Orange)
  mint: '#A7F3D0',
  blue: '#BFDBFE',
  orange: '#FED7AA', // Orange-200
  peach: '#FFD1AA',  // Custom Peach
};

const features = [
  {
    icon: Video,
    category: 'Your Questions',
    title: 'Real-World Experience',
    subtitle: 'Not Generic Questions',
    description: "Move beyond cookie-cutter interviews. Our platform asks candidates about actual scenarios they'll face in the role.",
    tags: [
      { label: 'Product Design', color: tagColors.purple },
      { label: 'System Architecture', color: tagColors.blue },
      { label: 'User Research', color: tagColors.yellow },
      { label: 'Technical Review', color: tagColors.pink },
      { label: 'Team Collaboration', color: tagColors.mint },
    ],
  },
  {
    icon: Clock,
    category: 'AI Analysis',
    title: 'Personalized Intelligence',
    subtitle: 'Tailored to Every Candidate',
    description: "Our AI analyzes each candidate's resume to generate tailored questions. No two interviews are the same.",
    tags: [
      { label: 'Resume Analysis', color: tagColors.pink },
      { label: 'Role Matching', color: tagColors.yellow },
      { label: 'Skill Assessment', color: tagColors.purple },
      { label: 'Experience Mapping', color: tagColors.blue },
      { label: 'Custom Questions', color: tagColors.orange }, // Changed to Orange-200
    ],
  },
  {
    icon: Shield,
    category: 'Security',
    title: 'Secure\n& Compliant',
    subtitle: 'Enterprise-Grade Protection',
    description: "Your data is protected with bank-level encryption and stored securely on Microsoft Azure.",
    tags: [
      { label: '256-bit Encryption', color: tagColors.peach }, // Changed to Peach
      { label: 'Azure Hosting', color: tagColors.blue },
      { label: 'GDPR Compliant', color: tagColors.mint },
      { label: 'Data Privacy', color: tagColors.pink },
    ],
  },
  {
    icon: BarChart,
    category: 'Insights',
    title: 'Comprehensive Insights',
    subtitle: 'Data-Driven Decisions',
    description: 'Receive detailed interview summaries, skill assessments, and actionable insights after every conversation.',
    tags: [
      { label: 'Interview Summary', color: tagColors.yellow },
      { label: 'Skill Breakdown', color: tagColors.purple },
      { label: 'Team Sharing', color: tagColors.pink },
      { label: 'Candidate Ranking', color: tagColors.blue },
      { label: 'Interview Recordings', color: tagColors.mint },
    ],
  },
];

export function FeaturesSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
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

    cardsRef.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              once: true,
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="py-20 md:py-32 bg-gradient-to-br from-white via-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-3xl mx-auto mb-16 opacity-0 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif', color: '#000000' }}>
            Interviews That Actually Reveal Talent
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#2D3748' }}>
            Generic questions get generic answers. Our AI-powered platform personalizes every interview.
          </p>
        </div>

        {/* Feature Cards - Full Width Stacked */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="opacity-0"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '40px',
                padding: '48px 56px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between lg:gap-16">
                {/* Left Side - Title & Description */}
                <div className="lg:w-1/2">
                  {/* Category Pill */}
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 20px',
                      borderRadius: '50px',
                      border: '1px solid #e5e7eb',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#374151',
                      marginBottom: '20px',
                    }}
                  >
                    {feature.category}
                  </span>

                  {/* Large Title */}
                  <h3
                    style={{
                      fontSize: '48px',
                      fontWeight: 800,
                      color: '#000000',
                      lineHeight: 1.1,
                      marginBottom: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>

                {/* Right Side - Key Components */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
                    Key components
                  </h4>

                  {/* Tags Grid */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        style={{
                          display: 'inline-block',
                          padding: '10px 20px',
                          borderRadius: '50px',
                          backgroundColor: tag.color,
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#1f2937',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
