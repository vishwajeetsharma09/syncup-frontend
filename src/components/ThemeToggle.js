import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

//   return (
//     <button
//       onClick={() =>
//         setTheme(theme === "dark" ? "light" : "dark")
//       }
//       className="
//         border
//         border-white-100
//         p-2
//         rounded-xl
//         hover:scale-105
//         transition
//       "
//     >
//       {theme === "dark" ? (
//         <Sun size={18} />
//       ) : (
//         <Moon size={18} />
//       )}
//     </button>
//   );
}