"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { login, logout } from "@/actions/auth";

const AuthButton = () => {
    const { data: session } = useSession();

    console.log("session: ", session);

    if (session?.user) {
        return (
            <button
                onClick={() => logout()}
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
            >
                Log Out
            </button>
        );
    }

    return (
        <button
            onClick={() => login()}
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-accent transition"
        >
            Login
        </button>
    );
};

export default AuthButton;
