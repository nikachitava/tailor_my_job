"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import AuthButton from "./AuthButton";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Get Started", href: "#get-started" },
];

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur"
            )}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-foreground">
                    JobTailor<span className="text-primary">AI</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-sm text-foreground">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <div className="flex gap-2">
                        <Link
                            href="/tailor"
                            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
                        >
                            Try Now
                        </Link>
                        <AuthButton />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-background border-t border-white/10 px-6 py-4">
                    <ul className="flex flex-col gap-4 text-foreground text-sm">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/get-started"
                                onClick={() => setMenuOpen(false)}
                                className="block text-white text-center bg-primary hover:bg-accent px-4 py-2 rounded-full"
                            >
                                Try Now
                            </Link>
                            <AuthButton />
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
