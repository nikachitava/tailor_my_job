"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Get Started", href: "#get-started" },
];

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/90 backdrop-blur border-b border-white/10 shadow-sm"
                    : "bg-transparent"
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
                    <Link
                        href="/get-started"
                        className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
                    >
                        Try Now
                    </Link>
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
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
