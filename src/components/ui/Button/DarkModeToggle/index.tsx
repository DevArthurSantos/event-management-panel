"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

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
      className="fixed cursor-pointer top-6 md:top-7 right-14 md:right-55 z-999 flex h-7 w-14 items-center rounded-full bg-gray-200 dark:bg-zinc-800 p-0.5 shadow-inner transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      <div className="relative h-6 w-full rounded-full">
        {/* Sol */}
        <div
          className={`absolute left-0.5 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        {/* Lua */}
        <div
          className={`absolute right-0.5 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>

        {/* Bolinha */}
        <div
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 flex items-center justify-center
            ${isDarkMode ? "translate-x-7" : "translate-x-0"}`}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}