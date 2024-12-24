import CommandList from '../components/CommandList';
import { commands } from '../data/linuxCommands';

const LinuxCommands = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Comandos Linux</h1>
      <CommandList commands={commands} selectedCategory="linux" />
    </div>
  );
};

export default LinuxCommands;