import { useState, useEffect } from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import classNames from "classnames";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className={classNames(
        "flex items-center justify-center text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md relative right-6"
      )}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {isMounted && (
        <>
          <SunMoon
            className={classNames("h-6 w-6 absolute transition-all", {
              "rotate-0 scale-100 text-black": theme === "light",
              "rotate-90 scale-0 text-white": theme === "dark",
            })}
          />
          <SunMoon
            className={classNames("h-6 w-6 absolute transition-all", {
              "rotate-0 scale-100 text-white": theme === "dark",
              "rotate-90 scale-0 text-black": theme === "light",
            })}
          />
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
