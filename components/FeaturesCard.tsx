import { IFeaturesCard } from "@/types/IFeaturesCard";
import React from "react";

const FeaturesCard = ({ icon, title, desc }: IFeaturesCard) => {
    return (
        <div className="relative group rounded-2xl p-6 bg-white/10 dark:bg-[#0f172a]/50 backdrop-blur-md border border-white/10 dark:border-slate-700 shadow-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-[var(--primary)]">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-30 transition-all duration-300 blur-lg pointer-events-none" />
            <div className="relative z-10">
                <div className="mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-[var(--muted)]">{desc}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;
