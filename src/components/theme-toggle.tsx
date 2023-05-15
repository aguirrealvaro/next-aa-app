import { FunctionComponent } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={handleToggle}
      className="bg-sky-500 px-4 py-2 text-white dark:text-black rounded"
    >
      Toggle theme: {theme === "light" ? "Light" : "Dark"}
    </button>
  );
};
