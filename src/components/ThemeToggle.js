import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        border
        border-neutral-700
        dark:border-neutral-600

        p-2
        rounded-xl

        hover:scale-105
        transition

        text-black
        dark:text-white
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}

const ThemeToggle = dynamic(
  () => Promise.resolve(ThemeToggleComponent),
  {
    ssr: false,
  }
);

export default ThemeToggle;