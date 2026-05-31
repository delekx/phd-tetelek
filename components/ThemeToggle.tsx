"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

        document.documentElement.classList.toggle("dark", shouldUseDark);
        setDark(shouldUseDark);
    }, []);

    function toggleTheme() {
        const nextDark = !dark;

        document.documentElement.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        setDark(nextDark);
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Téma váltása"
            className="relative inline-flex h-8 items-center gap-1 rounded-full border border-border bg-muted p-0.5 shadow-sm hover:bg-accent"
        >
            <span
                className={`absolute left-0.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-primary shadow-sm transition-transform duration-200 ease-out ${dark ? "translate-x-8" : "translate-x-0"
                    }`}
            />

            <span className="relative z-10 flex h-7 w-7 items-center justify-center">
                <Sun
                    className={`h-4 w-4 ${!dark ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                />
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center">
                <Moon
                    className={`h-4 w-4 ${dark ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                />
            </span>
        </button>
    );
}