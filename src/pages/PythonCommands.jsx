import React from 'react';
import CommandList from '../components/CommandList';
import { commands } from '../data/pythonCommands';
import { useTheme } from '../context/ThemeContext';

const PythonCommands = () => {
  const { isDark } = useTheme();
  return (
    <div className="container mx-auto px-4">
      <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        Comandos Python
      </h1>
      <CommandList commands={commands} selectedCategory="python" />
    </div>
  );
};

export default PythonCommands;