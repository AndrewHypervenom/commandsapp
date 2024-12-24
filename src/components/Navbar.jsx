import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ children, className }) => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <nav className={`
      w-full px-4 h-16 flex items-center justify-between
      bg-white dark:bg-gray-800 border-b dark:border-gray-700
      ${className}
    `}>
      <div className="flex items-center space-x-4">
        {children}
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Documentación de Comandos
        </span>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {isDark ? 
          <Sun className="h-5 w-5 text-gray-200 hover:text-white" /> : 
          <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        }
      </button>
    </nav>
  );
};

export default Navbar;