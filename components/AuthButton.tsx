"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
    const { data: session } = useSession();

    const handleLogout = () => {
        signOut();
    };

    const handleLogin = () => {
        signIn("google", { redirectTo: "/" }, { prompt: "select_account" });
    };

    if (session?.user) {
        return (
            <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
            >
                Log Out
            </button>
        );
    }

    return (
        <button
            onClick={handleLogin}
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
        >
            Login
        </button>
    );
};

export default AuthButton;
