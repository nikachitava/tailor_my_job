"use client";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    What People Are Saying
                </h2>
                <p className="text-[var(--muted)] text-lg mt-3 max-w-xl mx-auto">
                    Feedback from real users and professionals who benefited
                    from TailorMyJob
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            duration: 0.3,
                        }}
                        className="relative rounded-2xl bg-gradient-to-br from-[#181818] to-[#101010] border border-white/10 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.5)] overflow-hidden group"
                    >
                        <motion.div
                            initial={{ opacity: 0.1, scale: 0.9 }}
                            whileHover={{ opacity: 0.2, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute -top-5 -left-5 text-[var(--primary)] w-32 h-32 rotate-12"
                        >
                            <Quote className="w-full h-full" />
                        </motion.div>

                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {Array.from({ length: t.rating }).map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                    }}
                                >
                                    <Star className="w-5 h-5 fill-yellow-400" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            whileHover={{ scale: 1.01 }}
                            className="text-sm leading-relaxed text-gray-200 relative z-10"
                        >
                            “{t.feedback}”
                        </motion.p>

                        <div className="mt-6 flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-10 h-10 rounded-full bg-[var(--primary)]/30 border border-[var(--primary)] flex items-center justify-center font-bold text-sm text-white"
                            >
                                {t.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-white font-semibold">
                                    {t.name}
                                </div>
                                <div className="text-sm text-[var(--muted)]">
                                    {t.role}
                                </div>
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
