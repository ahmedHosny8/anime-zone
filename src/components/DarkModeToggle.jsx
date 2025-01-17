import { useContext } from 'react';
import { DarkModeContext } from '../context/dark-mode-context';
import { Moon, Sun } from 'lucide-react';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition-all duration-200 hover:bg-[var(--color-gray-200)]"
    >
      {isDarkMode ? (
        <Sun size={20} color="var(--color-gray-700)" />
      ) : (
        <Moon size={20} color="var(--color-gray-700)" />
      )}
    </button>
  );
}

export default DarkModeToggle;
