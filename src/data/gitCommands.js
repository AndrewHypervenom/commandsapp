export const commands = [
  {
    id: "git-1",
    command: "git init",
    description: "Inicializa un nuevo repositorio Git",
    category: "git",
    example: "git init mi-proyecto"
  },
  {
    id: "git-2",
    command: "git clone [url]",
    description: "Clona un repositorio remoto en tu máquina local",
    category: "git",
    example: "git clone https://github.com/usuario/repo.git"
  },
  {
    id: "git-3",
    command: "git add [archivo]",
    description: "Añade archivos al área de preparación (staging)",
    category: "git",
    example: "git add . # Añade todos los archivos\ngit add archivo.txt # Añade un archivo específico"
  },
  {
    id: "git-4",
    command: "git commit -m \"mensaje\"",
    description: "Crea un nuevo commit con los cambios en staging",
    category: "git",
    example: "git commit -m \"Añade función de login\""
  },
  {
    id: "git-5",
    command: "git branch [nombre-rama]",
    description: "Crea, lista o elimina ramas",
    category: "git",
    example: "git branch feature/login # Crea rama\ngit branch -d feature/login # Elimina rama"
  },
  {
    id: "git-6",
    command: "git checkout [rama]",
    description: "Cambia a una rama específica",
    category: "git",
    example: "git checkout develop"
  },
  {
    id: "git-7",
    command: "git merge [rama]",
    description: "Fusiona una rama con la rama actual",
    category: "git",
    example: "git merge feature/login"
  },
  {
    id: "git-8",
    command: "git pull",
    description: "Obtiene y fusiona cambios del repositorio remoto",
    category: "git",
    example: "git pull origin main"
  },
  {
    id: "git-9",
    command: "git push",
    description: "Envía commits locales al repositorio remoto",
    category: "git",
    example: "git push origin main"
  },
  {
    id: "git-10",
    command: "git status",
    description: "Muestra el estado del directorio de trabajo",
    category: "git",
    example: "git status"
  },
  {
    id: "git-11",
    command: "git log",
    description: "Muestra el historial de commits",
    category: "git",
    example: "git log --oneline # Formato resumido"
  },
  {
    id: "git-12",
    command: "git stash",
    description: "Guarda cambios en un stash temporal",
    category: "git",
    example: "git stash save \"Cambios temporales\""
  },
  {
    id: "git-13",
    command: "git reset [commit]",
    description: "Deshace cambios hasta un commit específico",
    category: "git",
    example: "git reset --hard HEAD~1"
  },
  {
    id: "git-14",
    command: "git fetch",
    description: "Descarga objetos y referencias del repositorio remoto",
    category: "git",
    example: "git fetch origin"
  },
  {
    id: "git-15",
    command: "git remote",
    description: "Gestiona repositorios remotos",
    category: "git",
    example: "git remote add origin https://github.com/usuario/repo.git"
  }
];