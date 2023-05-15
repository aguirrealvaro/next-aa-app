import { FunctionComponent } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return <button onClick={handleToggle}>Toggle theme</button>;
};
