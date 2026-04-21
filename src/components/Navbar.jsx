import React from 'react';
import { Logo, GitHubIcon } from '../icons/Icons';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
        <Logo />
        <span>LetterLens</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/mohitsoni705"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <GitHubIcon />
        </a>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
