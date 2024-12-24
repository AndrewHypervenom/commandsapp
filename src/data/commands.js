import { commands as gitCommands } from './gitCommands';
import { commands as linuxCommands } from './linuxCommands';
import { commands as pythonCommands } from './pythonCommands';
import { commands as dockerCommands } from './dockerCommands';
import { commands as postgresqlCommands } from './postgresqlCommands';
import { commands as powershellCommands } from './powershellCommands';
import { commands as apacheCommands } from './apacheCommands';
import { commands as nginxCommands } from './nginxCommands';
import { commands as opensslCommands } from './opensslCommands';
import { commands as letsencryptCommands } from './letsencryptCommands';
import { commands as sshCommands } from './sshCommands';

export const commands = [
  ...gitCommands,
  ...linuxCommands,
  ...pythonCommands,
  ...dockerCommands,
  ...postgresqlCommands,
  ...powershellCommands,
  ...apacheCommands,
  ...nginxCommands,
  ...opensslCommands,
  ...letsencryptCommands,
  ...sshCommands
];