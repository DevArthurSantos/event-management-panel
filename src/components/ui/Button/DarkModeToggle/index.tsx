"use client";

import { useEffect, useState } from "react";


export default function DarkModeToggle() {
  const [isDarkMode, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    const isDark =
      saved === "dark" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;

    const isDark = html.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDark(isDark ? true : false)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-999 top-6 right-50 cursor-pointer rounded-md bg-white px-5 py-2 text-sm font-medium text-gray-950"
    >
      {isDarkMode ? ('Moon') : ('sun')}

    </button>
  );
}