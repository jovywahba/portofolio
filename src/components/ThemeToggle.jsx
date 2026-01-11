import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default UI state = dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // ✅ Default to dark if nothing stored
    const theme = storedTheme ? storedTheme : "dark";

    if (!storedTheme) localStorage.setItem("theme", "dark");

    const isDark = theme === "dark";
    setIsDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);

    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
