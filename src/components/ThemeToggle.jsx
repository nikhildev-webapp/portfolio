import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05, rotate: 12 }}
      className="p-2 rounded-md"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <FiSun size={18} className="text-accent" />
      ) : (
        <FiMoon size={18} className="text-accent" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;
