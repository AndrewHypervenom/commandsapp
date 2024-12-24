export const commands = [
  {
    id: "docker-1",
    command: "docker ps",
    description: "Lista los contenedores en ejecución",
    category: "docker",
    example: "docker ps -a # Muestra todos los contenedores"
  },
  {
    id: "docker-2",
    command: "docker images",
    description: "Muestra las imágenes descargadas localmente",
    category: "docker",
    example: "docker images"
  },
  {
    id: "docker-3",
    command: "docker build",
    description: "Construye una imagen desde un Dockerfile",
    category: "docker",
    example: "docker build -t mi-app:1.0 ."
  },
  {
    id: "docker-4",
    command: "docker run [imagen]",
    description: "Crea y ejecuta un nuevo contenedor",
    category: "docker",
    example: "docker run -d -p 80:80 nginx"
  },
  {
    id: "docker-5",
    command: "docker-compose up",
    description: "Levanta servicios definidos en docker-compose.yml",
    category: "docker",
    example: "docker-compose up -d"
  },
  {
    id: "docker-6",
    command: "docker stop [contenedor]",
    description: "Detiene uno o más contenedores en ejecución",
    category: "docker",
    example: "docker stop mi-contenedor"
  },
  {
    id: "docker-7",
    command: "docker rm [contenedor]",
    description: "Elimina uno o más contenedores",
    category: "docker",
    example: "docker rm mi-contenedor"
  },
  {
    id: "docker-8",
    command: "docker rmi [imagen]",
    description: "Elimina una o más imágenes",
    category: "docker",
    example: "docker rmi nginx:latest"
  },
  {
    id: "docker-9",
    command: "docker exec",
    description: "Ejecuta un comando en un contenedor en ejecución",
    category: "docker",
    example: "docker exec -it mi-contenedor bash"
  },
  {
    id: "docker-10",
    command: "docker logs [contenedor]",
    description: "Muestra los logs de un contenedor",
    category: "docker",
    example: "docker logs --tail 100 mi-contenedor"
  },
  {
    id: "docker-11",
    command: "docker network",
    description: "Gestiona redes de Docker",
    category: "docker",
    example: "docker network create mi-red"
  },
  {
    id: "docker-12",
    command: "docker volume",
    description: "Gestiona volúmenes de Docker",
    category: "docker",
    example: "docker volume create mi-volumen"
  },
  {
    id: "docker-13",
    command: "docker-compose down",
    description: "Detiene y elimina los servicios definidos",
    category: "docker",
    example: "docker-compose down --volumes"
  },
  {
    id: "docker-14",
    command: "docker inspect",
    description: "Muestra información detallada de objetos Docker",
    category: "docker",
    example: "docker inspect mi-contenedor"
  },
  {
    id: "docker-15",
    command: "docker push",
    description: "Sube una imagen a un registro",
    category: "docker",
    example: "docker push miregistro.com/mi-app:1.0"
  }
];