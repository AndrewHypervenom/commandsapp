export const commands = [
  {
    id: "apache-1",
    command: "apache2ctl -t",
    description: "Verifica la sintaxis de la configuración",
    category: "apache",
    example: "apache2ctl -t"
  },
  {
    id: "apache-2",
    command: "apache2ctl -S",
    description: "Muestra la configuración del servidor virtual",
    category: "apache",
    example: "apache2ctl -S"
  },
  {
    id: "apache-3",
    command: "apache2ctl graceful",
    description: "Reinicia Apache de forma elegante",
    category: "apache",
    example: "sudo apache2ctl graceful"
  },
  {
    id: "apache-4",
    command: "apache2ctl configtest",
    description: "Prueba el archivo de configuración",
    category: "apache",
    example: "apache2ctl configtest"
  },
  {
    id: "apache-5",
    command: "a2ensite [sitio]",
    description: "Habilita un sitio virtual",
    category: "apache",
    example: "sudo a2ensite 000-default.conf"
  },
  {
    id: "apache-6",
    command: "a2dissite [sitio]",
    description: "Deshabilita un sitio virtual",
    category: "apache",
    example: "sudo a2dissite 000-default.conf"
  },
  {
    id: "apache-7",
    command: "a2enmod [módulo]",
    description: "Habilita un módulo Apache",
    category: "apache",
    example: "sudo a2enmod rewrite"
  },
  {
    id: "apache-8",
    command: "a2dismod [módulo]",
    description: "Deshabilita un módulo Apache",
    category: "apache",
    example: "sudo a2dismod rewrite"
  },
  {
    id: "apache-9",
    command: "htpasswd -c [archivo] [usuario]",
    description: "Crea un nuevo archivo de contraseñas",
    category: "apache",
    example: "htpasswd -c /etc/apache2/.htpasswd usuario1"
  },
  {
    id: "apache-10",
    command: "apache2ctl -l",
    description: "Lista los módulos compilados",
    category: "apache",
    example: "apache2ctl -l"
  },
  {
    id: "apache-11",
    command: "apache2ctl -M",
    description: "Lista los módulos cargados",
    category: "apache",
    example: "apache2ctl -M"
  },
  {
    id: "apache-12",
    command: "apache2ctl -v",
    description: "Muestra la versión de Apache",
    category: "apache",
    example: "apache2ctl -v"
  },
  {
    id: "apache-13",
    command: "tail -f /var/log/apache2/error.log",
    description: "Monitoriza el log de errores en tiempo real",
    category: "apache",
    example: "tail -f /var/log/apache2/error.log"
  },
  {
    id: "apache-14",
    command: "apache2ctl status",
    description: "Muestra el estado del servidor",
    category: "apache",
    example: "apache2ctl status"
  },
  {
    id: "apache-15",
    command: "apache2ctl fullstatus",
    description: "Muestra el estado completo del servidor",
    category: "apache",
    example: "apache2ctl fullstatus"
  }
];