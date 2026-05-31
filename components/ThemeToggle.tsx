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
            className="inline-flex h-8 items-center gap-1 rounded-full border border-border bg-muted p-0.5 shadow-sm transition-colors hover:bg-accent"
        >
            <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${!dark
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
            >
                <Sun className="h-4 w-4" />
            </span>

            <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${dark
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
            >
                <Moon className="h-4 w-4" />
            </span>
        </button>
    );
}