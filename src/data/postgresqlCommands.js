export const commands = [
  {
    id: "pg-1",
    command: "\\l",
    description: "Lista todas las bases de datos",
    category: "postgresql",
    example: "\\l"
  },
  {
    id: "pg-2",
    command: "\\c [database]",
    description: "Conecta a una base de datos específica",
    category: "postgresql",
    example: "\\c mibasededatos"
  },
  {
    id: "pg-3",
    command: "\\dt",
    description: "Lista todas las tablas en la base de datos actual",
    category: "postgresql",
    example: "\\dt"
  },
  {
    id: "pg-4",
    command: "\\du",
    description: "Lista todos los usuarios y sus roles",
    category: "postgresql",
    example: "\\du"
  },
  {
    id: "pg-5",
    command: "CREATE DATABASE [nombre]",
    description: "Crea una nueva base de datos",
    category: "postgresql",
    example: "CREATE DATABASE mibasededatos;"
  },
  {
    id: "pg-6",
    command: "DROP DATABASE [nombre]",
    description: "Elimina una base de datos",
    category: "postgresql",
    example: "DROP DATABASE mibasededatos;"
  },
  {
    id: "pg-7",
    command: "CREATE USER [nombre] WITH PASSWORD '[contraseña]'",
    description: "Crea un nuevo usuario",
    category: "postgresql",
    example: "CREATE USER miusuario WITH PASSWORD 'micontraseña';"
  },
  {
    id: "pg-8",
    command: "GRANT [privilegios] ON [objeto] TO [usuario]",
    description: "Otorga privilegios a un usuario",
    category: "postgresql",
    example: "GRANT ALL PRIVILEGES ON DATABASE mibasededatos TO miusuario;"
  },
  {
    id: "pg-9",
    command: "\\d [tabla]",
    description: "Describe la estructura de una tabla",
    category: "postgresql",
    example: "\\d mitabla"
  },
  {
    id: "pg-10",
    command: "CREATE INDEX [nombre] ON [tabla] ([columna])",
    description: "Crea un índice en una tabla",
    category: "postgresql",
    example: "CREATE INDEX idx_nombre ON usuarios (nombre);"
  },
  {
    id: "pg-11",
    command: "VACUUM [tabla]",
    description: "Limpia y optimiza una tabla",
    category: "postgresql",
    example: "VACUUM ANALYZE mitabla;"
  },
  {
    id: "pg-12",
    command: "pg_dump -U [usuario] [database] > [archivo]",
    description: "Respalda una base de datos",
    category: "postgresql",
    example: "pg_dump -U postgres mibasededatos > respaldo.sql"
  },
  {
    id: "pg-13",
    command: "psql -U [usuario] -d [database] -f [archivo]",
    description: "Restaura una base de datos desde un archivo",
    category: "postgresql",
    example: "psql -U postgres -d mibasededatos -f respaldo.sql"
  },
  {
    id: "pg-14",
    command: "ALTER USER [usuario] WITH PASSWORD '[nueva_contraseña]'",
    description: "Cambia la contraseña de un usuario",
    category: "postgresql",
    example: "ALTER USER miusuario WITH PASSWORD 'nueva_contraseña';"
  },
  {
    id: "pg-15",
    command: "\\timing",
    description: "Activa/desactiva el tiempo de ejecución de consultas",
    category: "postgresql",
    example: "\\timing"
  }
];