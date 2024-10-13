"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

const ThemSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200 absolute right-10 top-10"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <AiOutlineSun size={24} /> : <AiOutlineMoon size={24} />}
    </button>
  );
};

export default ThemSwitcher;
