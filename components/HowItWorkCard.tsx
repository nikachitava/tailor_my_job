import { IHowItWorkCard } from "@/types/IHowItWorkCard";
import React from "react";

const HowItWorkCard = ({ desc, icon, title }: IHowItWorkCard) => {
    return (
        <div className="relative group border border-transparent bg-white/5 dark:bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-md transition-all duration-300 hover:scale-[1.025] hover:shadow-xl hover:border-[var(--primary)]">
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--primary)] group-hover:shadow-[0_0_15px_var(--primary)] transition" />
            <div className="relative z-10">
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[var(--muted)]">{desc}</p>
            </div>
        </div>
    );
};

export default HowItWorkCard;
