"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, X, Mail, Send } from "lucide-react";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const Footer = () => {
    return (
        <FadeInWhenVisible>
            <footer className="bg-[#0a0a0a] text-gray-300 px-6 pt-20 pb-10 mt-32 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            JobTailor AI
                        </h2>
                        <p className="mt-4 text-sm text-gray-400 max-w-sm">
                            Let AI fine-tune your job descriptions. Boost your
                            chances of getting hired with tailored, impactful
                            content.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="hover:text-white"
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/get-started"
                                    className="hover:text-white"
                                >
                                    Get Started
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Stay Connected
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                            <a
                                href="https://github.com/nikachitava"
                                target="_blank"
                                className="hover:text-white"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/nikachitava18"
                                target="_blank"
                                className="hover:text-white"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://x.com/nikachitava18"
                                target="_blank"
                                className="hover:text-white"
                            >
                                <X size={20} />
                            </a>
                            <a
                                href="mailto:chitava18.official@gmail.com"
                                className="hover:text-white"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                        <form className="relative mt-4">
                            <input
                                type="email"
                                placeholder="Subscribe to newsletter"
                                className="w-full px-4 py-2 pr-10 bg-white/10 border border-white/20 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9333ea]"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-2 text-white hover:text-purple-400"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} JobTailor AI. All rights
                    reserved.
                </div>
            </footer>
        </FadeInWhenVisible>
    );
};

export default Footer;
