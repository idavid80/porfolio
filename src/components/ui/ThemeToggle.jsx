/*import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}
*/
// src/components/layout/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext'; // Importa el hook que creaste
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  // Ahora usas 'theme' y 'toggleTheme' del contexto unificado
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-white bg-gray-800 dark:bg-gray-100 dark:text-gray-900 shadow-md transition-colors"
      aria-label="Toggle theme"
    >
      {/* Muestra un icono u otro basado en el valor de 'theme' */}
      {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-400" />}
    </button>
  );
}