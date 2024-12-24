import CommandList from '../components/CommandList';
import { commands } from '../data/dockerCommands';

const DockerCommands = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Comandos Docker</h1>
      <CommandList commands={commands} selectedCategory="docker" />
    </div>
  );
};

export default DockerCommands;