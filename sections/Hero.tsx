"use client";

import CustomButton from "@/components/CustomButton";
import React from "react";
import heroAnimation from "../public/assets/heroAnimation.json";
import dynamic from "next/dynamic";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
});

const Hero = () => {
    const router = useRouter();

    return (
        <FadeInWhenVisible>
            <section className="bg-background text-foreground py-20 px-4 md:px-10">
                <div className="min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Tailor Your Job Applications
                            <br className="hidden md:block" /> with{" "}
                            <span className="text-primary">AI</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted max-w-lg">
                            Generate personalized CVs and cover letters that
                            match the job description in seconds. Boost your
                            chances of landing interviews with smarter
                            applications.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <CustomButton
                                title="Get Started"
                                onClick={() => router.push("/tailor")}
                                className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-medium transition"
                            />
                            <CustomButton
                                title="See How It Works"
                                onClick={() => {
                                    router.push("how-it-works");
                                }}
                                className="order border-input-border text-foreground px-6 py-3 rounded-xl font-medium hover:bg-[var(--accent)] hover:text-white transition"
                            />
                        </div>
                    </div>
                    {/* Animated SVG on right side */}
                    <div className="flex-1">
                        <Lottie animationData={heroAnimation} loop />
                    </div>
                </div>
            </section>
        </FadeInWhenVisible>
    );
};

export default Hero;
