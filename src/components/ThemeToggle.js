import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="theme-toggle"
    aria-label="Toggle theme"
  >
    {isDark ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default ThemeToggle;