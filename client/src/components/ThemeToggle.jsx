import React, { useEffect, useState } from "react";

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme();
  });

  // Set html class and persist to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync with system theme on first load if no manual setting
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setTheme(getSystemTheme());
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label="Toggle theme"
      className="rounded-full w-10 h-10 flex justify-center items-center hover:bg-orange-100 dark:hover:bg-zinc-800 transition"
    >
      {theme === 'dark' ? (
        // Sun icon for dark mode (switch to light)
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400"><circle cx="12" cy="12" r="5" strokeWidth="2"/><path strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.07-1.41 1.41M6.46 17.54l-1.41 1.41m0-13.9 1.41 1.41M17.54 17.54l1.41 1.41"/></svg>
      ) : (
        // Moon icon for light mode (switch to dark)
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-zinc-900 dark:text-zinc-100"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/></svg>
      )}
    </button>
  );
}
