import React from 'react';
import CommandCard from './CommandCard';
import { useTheme } from '../context/ThemeContext';

const CommandList = ({ commands = [], searchTerm = '', selectedCategory = 'all' }) => {
  const { isDark } = useTheme();

  const filteredCommands = commands.filter((command) => {
    const matchesSearch = searchTerm.toLowerCase();
    const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
    
    return (
      (command.command.toLowerCase().includes(matchesSearch) ||
      command.description.toLowerCase().includes(matchesSearch)) &&
      matchesCategory
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCommands.map((command) => (
        <CommandCard key={command.id} {...command} />
      ))}
      {filteredCommands.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className={`text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            No se encontraron comandos
          </p>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}
    </div>
  );
};

export default CommandList;