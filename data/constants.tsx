import { Rocket, Brain, Clock, Star } from "lucide-react";

interface Feature {
    id: number;
    icon: React.JSX.Element;
    title: string;
    desc: string;
}

export const features: Feature[] = [
    {
        id: 1,
        icon: <Star className="w-6 h-6 text-primary" />,
        title: "Tailored To Any Role",
        desc: "Whether it’s Software Engineer or UX Designer, your documents match perfectly.",
    },
    {
        id: 2,
        icon: <Brain className="w-6 h-6 text-primary" />,
        title: "Powered by OpenAI",
        desc: "Smart language models ensure your profile aligns with the job tone and keywords.",
    },
    {
        id: 3,
        icon: <Clock className="w-6 h-6 text-primary" />,
        title: "Fast & Effortless",
        desc: "Generate a job-ready CV & cover letter in seconds — no more blank-page anxiety.",
    },
    {
        id: 4,
        icon: <Rocket className="w-6 h-6 text-primary" />,
        title: "Built for Job Seekers",
        desc: "No clutter, no fluff — just a streamlined experience designed to help you succeed.",
    },
];

import { Sparkles, FileText, Wand2 } from "lucide-react";

interface Step {
    id: number;
    icon: React.JSX.Element;
    title: string;
    desc: string;
}

export const steps: Step[] = [
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
