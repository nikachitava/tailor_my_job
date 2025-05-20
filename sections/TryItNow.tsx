"use client";

import React from "react";
import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";

const TryItNow = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTailor = async () => {
        setLoading(true);
        // TODO: Replace with actual OpenAI API call
        setTimeout(() => {
            setResult(`✨ Tailored Cover Letter for:\n"${input}"`);
            setLoading(false);
        }, 1200);
    };
    return (
        <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-[var(--foreground)] overflow-hidden">
            {/* Background glow blob */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)] opacity-20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start z-10">
                {/* Left */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Try It Live
                    </h2>
                    <p className="text-lg text-[var(--muted)] max-w-md leading-relaxed">
                        Paste a job description and instantly see how
                        TailorMyJob customizes your response using powerful AI.
                    </p>
                </div>

                {/* Right */}
                <div className="bg-white/5 dark:bg-[#131313]/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl group">
                    <textarea
                        rows={5}
                        placeholder="e.g., We are looking for a React developer with experience in building scalable applications..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full p-4 text-sm rounded-md border border-[var(--input-border)] bg-black/20 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-white placeholder:text-gray-400 transition-all duration-200 resize-none"
                    />
                    <button
                        onClick={handleTailor}
                        disabled={loading || !input}
                        className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white font-semibold rounded-lg hover:brightness-110 transition disabled:opacity-40"
                    >
                        <Wand2 className="w-5 h-5" />
                        {loading ? "Generating..." : "Tailor It"}
                    </button>

                    {result && (
                        <div className="mt-6 p-4 rounded-lg border border-white/10 bg-white/10 text-sm text-[var(--muted)] whitespace-pre-line font-mono">
                            <Sparkles className="inline-block w-4 h-4 mr-2 text-[var(--primary)]" />
                            {result}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TryItNow;
