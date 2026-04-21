import React from 'react';
import { SunIcon, MoonIcon } from '../icons/Icons';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
