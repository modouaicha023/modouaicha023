"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md relative right-6"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
      <Sun
        className={`h-6 w-6 absolute transition-all ${
          theme === "light"
            ? "rotate-0 scale-100 text-black"
            : "rotate-90 scale-0 text-white"
        }`}
      />
      <Moon
        className={`h-6 w-6 absolute transition-all ${
          theme === "dark"
            ? "rotate-0 scale-100 text-white"
            : "rotate-90 scale-0 text-black"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
