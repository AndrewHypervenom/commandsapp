import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GitCommands from './pages/GitCommands';
import LinuxCommands from './pages/LinuxCommands';
import PythonCommands from './pages/PythonCommands';
import DockerCommands from './pages/DockerCommands';
import PowerShellCommands from './pages/PowerShellCommands';
import PostgreSQLCommands from './pages/PostgreSQLCommands';
import ApacheCommands from './pages/ApacheCommands';
import NginxCommands from './pages/NginxCommands';
import OpenSSLCommands from './pages/OpenSSLCommands';
import LetsEncryptCommands from './pages/LetsEncryptCommands';
import SSHCommands from './pages/SSHCommands';
import { Menu } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Sidebar móvil */}
          <aside className={`
            fixed top-0 left-0 z-40 lg:sticky
            w-64 h-full transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <Sidebar onClose={() => setIsOpen(false)} />
          </aside>

          {/* Overlay móvil */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Contenido principal */}
          <div className="flex-1 flex flex-col min-h-screen">
            <Navbar>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-200" />
              </button>
            </Navbar>
            
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/git" element={<GitCommands />} />
                <Route path="/linux" element={<LinuxCommands />} />
                <Route path="/python" element={<PythonCommands />} />
                <Route path="/docker" element={<DockerCommands />} />
                <Route path="/powershell" element={<PowerShellCommands />} />
                <Route path="/postgresql" element={<PostgreSQLCommands />} />
                <Route path="/apache" element={<ApacheCommands />} />
                <Route path="/nginx" element={<NginxCommands />} />
                <Route path="/openssl" element={<OpenSSLCommands />} />
                <Route path="/letsencrypt" element={<LetsEncryptCommands />} />
                <Route path="/ssh" element={<SSHCommands />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;