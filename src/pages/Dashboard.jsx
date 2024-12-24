// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import CommandList from '../components/CommandList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { commands } from '../data/commands';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredCommands, setFilteredCommands] = useState(commands);
  const { isDark } = useTheme();

  useEffect(() => {
    const filtered = commands.filter(command => {
      const matchesSearch = command.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          command.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredCommands(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <SearchBar onSearch={setSearchTerm} />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <CommandList 
        commands={filteredCommands}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Dashboard;