import React from "react";

import FeaturesCard from "@/components/FeaturesCard";
import { features } from "@/data/constants";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const WhyTailorMyJob = () => {
    return (
        <FadeInWhenVisible delay={0.2}>
            <section className="bg-background text-foreground py-20 px-4 md:px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why TailorMyJob?
                        </h2>
                        <p className="text-[var(--muted)] mb-6 max-w-md">
                            Tired of rewriting your CV for every job?
                            TailorMyJob uses AI to customize your application —
                            instantly and accurately. It’s built for speed,
                            clarity, and results.
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
        </FadeInWhenVisible>
    );
};

export default WhyTailorMyJob;
