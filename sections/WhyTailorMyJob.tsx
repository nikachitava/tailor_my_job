import React from "react";

import { Rocket, Brain, Clock, Star } from "lucide-react";
import FeaturesCard from "@/components/FeaturesCard";

const features = [
    {
        id: 1,
        icon: <Star className="w-6 h-6 text-[var(--primary)]" />,
        title: "Tailored To Any Role",
        desc: "Whether it’s Software Engineer or UX Designer, your documents match perfectly.",
    },
    {
        id: 2,
        icon: <Brain className="w-6 h-6 text-[var(--primary)]" />,
        title: "Powered by OpenAI",
        desc: "Smart language models ensure your profile aligns with the job tone and keywords.",
    },
    {
        id: 3,
        icon: <Clock className="w-6 h-6 text-[var(--primary)]" />,
        title: "Fast & Effortless",
        desc: "Generate a job-ready CV & cover letter in seconds — no more blank-page anxiety.",
    },
    {
        id: 4,
        icon: <Rocket className="w-6 h-6 text-[var(--primary)]" />,
        title: "Built for Job Seekers",
        desc: "No clutter, no fluff — just a streamlined experience designed to help you succeed.",
    },
];

const WhyTailorMyJob = () => {
    return (
        <section className="bg-background text-foreground py-20 px-4 md:px-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why TailorMyJob?
                    </h2>
                    <p className="text-[var(--muted)] mb-6 max-w-md">
                        Tired of rewriting your CV for every job? TailorMyJob
                        uses AI to customize your application — instantly and
                        accurately. It’s built for speed, clarity, and results.
                    </p>
                </div>

                {/* Right Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <FeaturesCard
                            key={feature.id}
                            desc={feature.desc}
                            icon={feature.icon}
                            title={feature.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTailorMyJob;
