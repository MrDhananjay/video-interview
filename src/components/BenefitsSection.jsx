"use client";
import { useRef } from 'react';
import { Clock, TrendingDown, UserCheck, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const benefits = [
    {
        icon: Clock,
        title: "10+ Hours Saved",
        description: "Save 10+ hours per week on interview prep and scheduling with automated intelligence.",
        color: "#F4A940"
    },
    {
        icon: TrendingDown,
        title: "40% Faster Hiring",
        description: "Reduce time-to-hire by 40% with streamlined processes and instant AI evaluations.",
        color: "#0B5CD5"
    },
    {
        icon: UserCheck,
        title: "Higher Quality Talent",
        description: "Improve candidate quality with personalized assessments that reveal true potential.",
        color: "#10B981"
    },
    {
        icon: Share2,
        title: "Perfect Team Alignment",
        description: "Increase team alignment with shared, detailed reports and collaborative decision making.",
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
        <section ref={containerRef} id="benefits" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A337A' }}>
                        The Difference You'll Notice Immediately
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our platform doesn't just change how you interview—it transforms your entire recruitment outcome.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 opacity-0"
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: `${benefit.color}10`, color: benefit.color }}
                            >
                                <benefit.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
