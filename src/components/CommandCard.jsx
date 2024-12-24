import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const getCategoryStyle = (category) => {
  const styles = {
    git: 'bg-gradient-to-r from-[#F05032] to-[#FF6B4A] text-white',
    linux: 'bg-gradient-to-r from-[#FCC624] to-[#FFD700] text-black',
    python: 'bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] text-white',
    docker: 'bg-gradient-to-r from-[#2496ED] to-[#37A3FF] text-white',
    powershell: 'bg-gradient-to-r from-[#5391FE] to-[#3D87F5] text-white',
    postgresql: 'bg-gradient-to-r from-[#336791] to-[#4682B4] text-white',
    apache: 'bg-gradient-to-r from-[#D22128] to-[#FF2D35] text-white',
    nginx: 'bg-gradient-to-r from-[#009639] to-[#00B347] text-white',
    openssl: 'bg-gradient-to-r from-[#721412] to-[#9B1B18] text-white',
    letsencrypt: 'bg-gradient-to-r from-[#2C3C3D] to-[#3F5657] text-white',
    ssh: 'bg-gradient-to-r from-[#231F20] to-[#3D3536] text-white'
  };
  return styles[category] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
};

const CommandCard = ({ command, description, example, category }) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`
      rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 
      transition-all duration-300 overflow-hidden
      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
      border
    `}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getCategoryStyle(category)}`}>
            {category}
          </span>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Copiar comando"
          >
            {copied ? 
              <Check className="w-5 h-5 text-green-500" /> : 
              <ClipboardCopy className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            }
          </button>
        </div>

        <pre className={`
          mb-4 p-4 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400
          dark:scrollbar-thumb-gray-600 scrollbar-track-transparent
          ${isDark ? 'bg-gray-900' : 'bg-gray-800'}
        `}>
          <code className="text-gray-100 text-sm font-mono">{command}</code>
        </pre>

        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>

        {example && (
        <div className="mt-4">
            <h4 className={`font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Ejemplo:
            </h4>
            <pre className={`
            p-3 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400
            dark:scrollbar-thumb-gray-600 scrollbar-track-transparent
            ${isDark ? 'bg-gray-700' : 'bg-gray-100'}
            `}>
            <code className={`text-sm font-mono ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                {example}
            </code>
            </pre>
        </div>
        )}
      </div>
    </div>
  );
};

export default CommandCard;