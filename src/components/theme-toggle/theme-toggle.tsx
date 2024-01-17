"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "rounded bg-sky-500 px-4 py-2 text-white hover:bg-blue-600",
        "dark:text-black dark:hover:bg-blue-400"
      )}
    >
      Toggle theme
    </button>
  );
};
