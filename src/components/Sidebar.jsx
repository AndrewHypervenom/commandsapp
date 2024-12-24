import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, GitBranch, Terminal, Container, Database,
  Server, Shield, Lock, Box, X
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const { isDark } = useTheme();

  const menuItems = [
    { name: 'Inicio', icon: Home, path: '/' },
    { name: 'Git', icon: GitBranch, path: '/git' },
    { name: 'Linux', icon: Terminal, path: '/linux' },
    { name: 'Python', icon: Box, path: '/python' },
    { name: 'Docker', icon: Container, path: '/docker' },
    { name: 'PowerShell', icon: Terminal, path: '/powershell' },
    { name: 'PostgreSQL', icon: Database, path: '/postgresql' },
    { name: 'Apache', icon: Server, path: '/apache' },
    { name: 'Nginx', icon: Server, path: '/nginx' },
    { name: 'OpenSSL', icon: Shield, path: '/openssl' },
    { name: "Let's Encrypt", icon: Lock, path: '/letsencrypt' },
    { name: 'SSH', icon: Terminal, path: '/ssh' }
  ];

  return (
    <div className="sidebar">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Documentación CLI
        </h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon className={`
                nav-link-icon 
                ${isActive 
                  ? 'text-white' 
                  : isDark 
                    ? 'text-gray-400 hover:text-gray-200' 
                    : 'text-gray-600 hover:text-gray-900'
                }
              `} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;