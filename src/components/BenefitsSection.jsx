"use client";
import { useRef } from 'react';
import { Clock, TrendingDown, UserCheck, Share2, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const benefits = [
    {
        icon: Clock,
        title: "10+ Hours Saved",
        description: "Save 10+ hours per week on interview prep and scheduling\nwith automated intelligence.",
        color: "#F4A940"
    },
    {
        icon: TrendingDown,
        title: "40% Faster Hiring",
        description: "Reduce time-to-hire by 40% with streamlined processes\n and instant AI evaluations.",
        color: "#0B5CD5"
    },
    {
        icon: UserCheck,
        title: "Higher Quality Talent",
        description: "Improve candidate quality with personalized assessments\n that reveal true potential.",
        color: "#10B981"
    },
    {
        icon: Share2,
        title: "Perfect Team Alignment",
        description: "Increase team alignment with shared, detailed reports\n and collaborative decision making.",
        color: "#8B5CF6"
    }
];

export function BenefitsSection() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
                "-=0.4"
            );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="benefits" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#000000ff' }}>
                        The Difference You'll Notice Immediately
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                        Vasitum doesn't just change how you interview—it transforms your entire recruitment outcome.
                    </p>
                </div>

                {/* Bento-style 2x2 Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer opacity-0"
                        >


                            {/* Horizontal Layout: Icon + Text */}
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 flex-shrink-0"
                                    style={{ color: benefit.color }}
                                >
                                    <benefit.icon size={24} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-1" style={{ whiteSpace: 'pre-line' }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
