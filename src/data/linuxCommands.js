export const commands = [
  {
    id: "linux-1",
    command: "ls",
    description: "Lista el contenido de un directorio",
    category: "linux",
    example: "ls -la # Lista detallada incluyendo archivos ocultos"
  },
  {
    id: "linux-2",
    command: "cd [directorio]",
    description: "Cambia el directorio actual",
    category: "linux",
    example: "cd /home/usuario/documentos"
  },
  {
    id: "linux-3",
    command: "pwd",
    description: "Muestra la ruta del directorio actual",
    category: "linux",
    example: "pwd"
  },
  {
    id: "linux-4",
    command: "mkdir [nombre]",
    description: "Crea un nuevo directorio",
    category: "linux",
    example: "mkdir -p proyectos/nuevo"
  },
  {
    id: "linux-5",
    command: "rm [archivo]",
    description: "Elimina archivos o directorios",
    category: "linux",
    example: "rm -rf directorio # Elimina recursivamente"
  },
  {
    id: "linux-6",
    command: "cp [origen] [destino]",
    description: "Copia archivos o directorios",
    category: "linux",
    example: "cp -r /origen /destino"
  },
  {
    id: "linux-7",
    command: "mv [origen] [destino]",
    description: "Mueve o renombra archivos o directorios",
    category: "linux",
    example: "mv archivo.txt nuevo.txt"
  },
  {
    id: "linux-8",
    command: "chmod [permisos] [archivo]",
    description: "Cambia los permisos de archivos o directorios",
    category: "linux",
    example: "chmod 755 script.sh"
  },
  {
    id: "linux-9",
    command: "chown [usuario:grupo] [archivo]",
    description: "Cambia el propietario de archivos o directorios",
    category: "linux",
    example: "chown usuario:grupo archivo.txt"
  },
  {
    id: "linux-10",
    command: "find [ruta] -name [patrón]",
    description: "Busca archivos y directorios",
    category: "linux",
    example: "find / -name \"*.log\""
  },
  {
    id: "linux-11",
    command: "grep [patrón] [archivo]",
    description: "Busca patrones en archivos",
    category: "linux",
    example: "grep -r \"error\" /var/log/"
  },
  {
    id: "linux-12",
    command: "ps",
    description: "Muestra los procesos en ejecución",
    category: "linux",
    example: "ps aux | grep nginx"
  },
  {
    id: "linux-13",
    command: "kill [PID]",
    description: "Termina un proceso",
    category: "linux",
    example: "kill -9 1234"
  },
  {
    id: "linux-14",
    command: "tar",
    description: "Comprime o descomprime archivos",
    category: "linux",
    example: "tar -czf archivo.tar.gz directorio/"
  },
  {
    id: "linux-15",
    command: "df",
    description: "Muestra el espacio en disco",
    category: "linux",
    example: "df -h"
  },
  {
    id: "linux-16",
    command: "du",
    description: "Muestra el uso de espacio de archivos y directorios",
    category: "linux",
    example: "du -sh *"
  },
  {
    id: "linux-17",
    command: "top",
    description: "Muestra los procesos en tiempo real",
    category: "linux",
    example: "top"
  },
  {
    id: "linux-18",
    command: "systemctl",
    description: "Controla el sistema systemd y servicios",
    category: "linux",
    example: "systemctl status nginx"
  }
];