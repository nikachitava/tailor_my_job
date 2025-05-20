import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
    return (
        <FadeInWhenVisible>
            <section className="relative py-24 px-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] opacity-90"></div>
                <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#9333ea] blur-[120px] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[#22d3ee] blur-[100px] rounded-full opacity-20 animate-pulse"></div>

                <div className="relative z-10 max-w-4xl w-full mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Supercharge Your Job Hunt with AI
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                        Let AI tailor your applications and help you stand out
                        from the crowd. It’s free to start — no credit card
                        needed.
                    </p>
                    <Link
                        href="/get-started"
                        className="inline-block bg-gradient-to-r from-[#9333ea] to-[#22d3ee] hover:from-[#7e22ce] hover:to-[#0ea5e9] text-white font-medium px-7 py-3 rounded-full text-lg shadow-lg transition-all duration-300"
                    >
                        Get Started Free
                    </Link>
                </div>
            </section>
        </FadeInWhenVisible>
    );
};

export default GetStarted;
