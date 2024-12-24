import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SearchBar = ({ onSearch }) => {
  const { isDark } = useTheme();

  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Buscar comandos..."
        onChange={(e) => onSearch(e.target.value)}
        className={`
          w-full pl-12 pr-4 py-3 rounded-lg 
          ${isDark ? 
            'bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-400' : 
            'bg-white text-gray-900 border-gray-200 placeholder-gray-500'}
          border focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-300 ease-in-out
        `}
      />
      <Search className={`
        absolute left-4 top-3.5 h-5 w-5
        ${isDark ? 'text-gray-400' : 'text-gray-500'}
      `} />
    </div>
  );
};

export default SearchBar;