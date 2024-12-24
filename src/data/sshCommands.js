export const commands = [
  {
    id: "ssh-1",
    command: "ssh-keygen -t ed25519",
    description: "Genera un nuevo par de claves SSH usando Ed25519",
    category: "ssh",
    example: "ssh-keygen -t ed25519 -C \"email@ejemplo.com\""
  },
  {
    id: "ssh-2",
    command: "ssh-copy-id usuario@host",
    description: "Copia la clave pública al servidor remoto",
    category: "ssh",
    example: "ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor"
  },
  {
    id: "ssh-3",
    command: "ssh -p [puerto] usuario@host",
    description: "Conecta a un servidor usando un puerto específico",
    category: "ssh",
    example: "ssh -p 2222 usuario@servidor"
  },
  {
    id: "ssh-4",
    command: "scp [origen] [destino]",
    description: "Copia archivos de forma segura entre hosts",
    category: "ssh",
    example: "scp archivo.txt usuario@servidor:/ruta/destino/"
  },
  {
    id: "ssh-5",
    command: "ssh-add [clave]",
    description: "Añade una clave privada al agente SSH",
    category: "ssh",
    example: "ssh-add ~/.ssh/id_ed25519"
  },
  {
    id: "ssh-6",
    command: "ssh -L [puerto-local]:[host]:[puerto-remoto]",
    description: "Crea un túnel SSH para reenvío de puertos local",
    category: "ssh",
    example: "ssh -L 8080:localhost:80 usuario@servidor"
  },
  {
    id: "ssh-7",
    command: "ssh-keyscan [host]",
    description: "Obtiene las claves públicas de un host",
    category: "ssh",
    example: "ssh-keyscan github.com >> ~/.ssh/known_hosts"
  },
  {
    id: "ssh-8",
    command: "ssh -R [puerto-remoto]:[host]:[puerto-local]",
    description: "Crea un túnel SSH para reenvío de puertos remoto",
    category: "ssh",
    example: "ssh -R 8080:localhost:80 usuario@servidor"
  },
  {
    id: "ssh-9",
    command: "sftp usuario@host",
    description: "Inicia una sesión SFTP con un servidor remoto",
    category: "ssh",
    example: "sftp usuario@servidor"
  },
  {
    id: "ssh-10",
    command: "ssh-agent bash",
    description: "Inicia el agente SSH en el shell actual",
    category: "ssh",
    example: "eval $(ssh-agent -s)"
  },
  {
    id: "ssh-11",
    command: "ssh-keygen -R [host]",
    description: "Elimina una entrada del archivo known_hosts",
    category: "ssh",
    example: "ssh-keygen -R servidor.ejemplo.com"
  },
  {
    id: "ssh-12",
    command: "ssh -i [clave] usuario@host",
    description: "Conecta usando una clave privada específica",
    category: "ssh",
    example: "ssh -i ~/.ssh/mi_clave usuario@servidor"
  },
  {
    id: "ssh-13",
    command: "ssh -X usuario@host",
    description: "Habilita el reenvío X11 para aplicaciones gráficas",
    category: "ssh",
    example: "ssh -X usuario@servidor"
  },
  {
    id: "ssh-14",
    command: "ssh -f -N [comando-tunel]",
    description: "Ejecuta un túnel SSH en segundo plano",
    category: "ssh",
    example: "ssh -f -N -L 8080:localhost:80 usuario@servidor"
  },
  {
    id: "ssh-15",
    command: "ssh-keygen -lf [clave]",
    description: "Muestra la huella digital de una clave SSH",
    category: "ssh",
    example: "ssh-keygen -lf ~/.ssh/id_ed25519.pub"
  }
];