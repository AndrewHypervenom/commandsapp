export const commands = [
  {
    id: "nginx-1",
    command: "nginx -t",
    description: "Verifica la sintaxis de la configuración",
    category: "nginx",
    example: "nginx -t"
  },
  {
    id: "nginx-2",
    command: "nginx -s reload",
    description: "Recarga la configuración sin detener el servicio",
    category: "nginx",
    example: "nginx -s reload"
  },
  {
    id: "nginx-3",
    command: "nginx -s stop",
    description: "Detiene el servidor Nginx",
    category: "nginx",
    example: "nginx -s stop"
  },
  {
    id: "nginx-4",
    command: "nginx -s quit",
    description: "Detiene el servidor Nginx de forma elegante",
    category: "nginx",
    example: "nginx -s quit"
  },
  {
    id: "nginx-5",
    command: "nginx -V",
    description: "Muestra la versión y configuración de compilación",
    category: "nginx",
    example: "nginx -V"
  },
  {
    id: "nginx-6",
    command: "systemctl start nginx",
    description: "Inicia el servicio Nginx",
    category: "nginx",
    example: "sudo systemctl start nginx"
  },
  {
    id: "nginx-7",
    command: "systemctl status nginx",
    description: "Muestra el estado del servicio Nginx",
    category: "nginx",
    example: "sudo systemctl status nginx"
  },
  {
    id: "nginx-8",
    command: "nginx -c [archivo]",
    description: "Especifica un archivo de configuración alternativo",
    category: "nginx",
    example: "nginx -c /etc/nginx/nginx-custom.conf"
  },
  {
    id: "nginx-9",
    command: "tail -f /var/log/nginx/access.log",
    description: "Monitoriza el log de acceso en tiempo real",
    category: "nginx",
    example: "tail -f /var/log/nginx/access.log"
  },
  {
    id: "nginx-10",
    command: "tail -f /var/log/nginx/error.log",
    description: "Monitoriza el log de errores en tiempo real",
    category: "nginx",
    example: "tail -f /var/log/nginx/error.log"
  },
  {
    id: "nginx-11",
    command: "nginx -T",
    description: "Muestra la configuración actual",
    category: "nginx",
    example: "nginx -T"
  },
  {
    id: "nginx-12",
    command: "openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr",
    description: "Genera una nueva solicitud de certificado SSL",
    category: "nginx",
    example: "openssl req -new -newkey rsa:2048 -nodes -keyout /etc/nginx/ssl/server.key -out server.csr"
  },
  {
    id: "nginx-13",
    command: "nginx -s reopen",
    description: "Reabre los archivos de log",
    category: "nginx",
    example: "nginx -s reopen"
  },
  {
    id: "nginx-14",
    command: "htpasswd -c /etc/nginx/.htpasswd [usuario]",
    description: "Crea un archivo de autenticación básica",
    category: "nginx",
    example: "htpasswd -c /etc/nginx/.htpasswd usuario1"
  },
  {
    id: "nginx-15",
    command: "nginx -g [directiva]",
    description: "Establece directivas globales",
    category: "nginx",
    example: "nginx -g 'daemon off;'"
  }
];