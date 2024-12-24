import CommandList from '../components/CommandList';
import { commands } from '../data/databaseCommands';

const DatabaseCommands = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Comandos de Base de Datos</h1>
      <CommandList commands={commands} selectedCategory="postgresql" />
    </div>
  );
};

export default DatabaseCommands;