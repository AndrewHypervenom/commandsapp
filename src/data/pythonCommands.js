export const commands = [
  {
    id: "python-1",
    command: "python -m venv [nombre]",
    description: "Crea un entorno virtual",
    category: "python",
    example: "python -m venv mi_entorno"
  },
  {
    id: "python-2",
    command: "source [entorno]/bin/activate",
    description: "Activa un entorno virtual en Unix/macOS",
    category: "python",
    example: "source mi_entorno/bin/activate"
  },
  {
    id: "python-3",
    command: "[entorno]\\Scripts\\activate.bat",
    description: "Activa un entorno virtual en Windows",
    category: "python",
    example: "mi_entorno\\Scripts\\activate.bat"
  },
  {
    id: "python-4",
    command: "pip install [paquete]",
    description: "Instala un paquete Python",
    category: "python",
    example: "pip install requests"
  },
  {
    id: "python-5",
    command: "pip freeze > requirements.txt",
    description: "Guarda las dependencias en un archivo",
    category: "python",
    example: "pip freeze > requirements.txt"
  },
  {
    id: "python-6",
    command: "pip install -r requirements.txt",
    description: "Instala dependencias desde un archivo",
    category: "python",
    example: "pip install -r requirements.txt"
  },
  {
    id: "python-7",
    command: "python [archivo].py",
    description: "Ejecuta un script Python",
    category: "python",
    example: "python script.py"
  },
  {
    id: "python-8",
    command: "python -m pip install --upgrade pip",
    description: "Actualiza pip a la última versión",
    category: "python",
    example: "python -m pip install --upgrade pip"
  },
  {
    id: "python-9",
    command: "python -m pytest",
    description: "Ejecuta tests con pytest",
    category: "python",
    example: "python -m pytest tests/"
  },
  {
    id: "python-10",
    command: "python -m http.server",
    description: "Inicia un servidor web simple",
    category: "python",
    example: "python -m http.server 8000"
  },
  {
    id: "python-11",
    command: "python manage.py runserver",
    description: "Inicia el servidor de desarrollo Django",
    category: "python",
    example: "python manage.py runserver 0.0.0.0:8000"
  },
  {
    id: "python-12",
    command: "python manage.py makemigrations",
    description: "Crea migraciones en Django",
    category: "python",
    example: "python manage.py makemigrations"
  },
  {
    id: "python-13",
    command: "python manage.py migrate",
    description: "Aplica migraciones en Django",
    category: "python",
    example: "python manage.py migrate"
  },
  {
    id: "python-14",
    command: "python -m pip install -e .",
    description: "Instala un paquete en modo desarrollo",
    category: "python",
    example: "python -m pip install -e ."
  },
  {
    id: "python-15",
    command: "python -c \"comando\"",
    description: "Ejecuta código Python desde la línea de comandos",
    category: "python",
    example: "python -c \"import sys; print(sys.version)\""
  }
];