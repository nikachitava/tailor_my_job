import React from "react";
import HowItWorkCard from "@/components/HowItWorkCard";
import { steps } from "@/data/constants";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const HowItWorks = () => {
    return (
        <FadeInWhenVisible delay={0.1}>
            <section
                id="how-it-works"
                className="bg-background text-foreground py-20 px-4 md:px-10"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto mb-12">
                        In just three simple steps, let AI take the guesswork
                        out of job applications.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {steps.map((step) => (
                            <HowItWorkCard
                                key={step.id}
                                desc={step.desc}
                                icon={step.icon}
                                title={step.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </FadeInWhenVisible>
    );
};

export default HowItWorks;
