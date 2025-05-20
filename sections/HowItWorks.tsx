import React from "react";
import { Sparkles, FileText, Wand2 } from "lucide-react";
import HowItWorkCard from "@/components/HowItWorkCard";

const steps = [
    {
        id: 1,
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "1. Paste the Job Description",
        desc: "Copy and paste any job description from LinkedIn or other platforms.",
    },
    {
        id: 2,
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "2. Add Your Info or Resume",
        desc: "Upload your CV or describe your background — we’ll tailor it for you.",
    },
    {
        id: 3,
        icon: <Wand2 className="w-8 h-8 text-primary" />,
        title: "3. Get a Customized CV & Cover Letter",
        desc: "Our AI instantly generates tailored documents you can download or edit.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-background text-foreground py-20 px-4 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    How It Works
                </h2>
                <p className="text-[var(--muted)] max-w-xl mx-auto mb-12">
                    In just three simple steps, let AI take the guesswork out of
                    job applications.
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
    );
};

export default HowItWorks;
