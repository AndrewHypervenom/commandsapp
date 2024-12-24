export const commands = [
  {
    id: "le-1",
    command: "certbot --nginx",
    description: "Obtiene e instala un certificado para Nginx",
    category: "letsencrypt",
    example: "certbot --nginx -d example.com -d www.example.com"
  },
  {
    id: "le-2",
    command: "certbot --apache",
    description: "Obtiene e instala un certificado para Apache",
    category: "letsencrypt",
    example: "certbot --apache -d example.com"
  },
  {
    id: "le-3",
    command: "certbot certonly",
    description: "Obtiene un certificado sin instalarlo",
    category: "letsencrypt",
    example: "certbot certonly --webroot -w /var/www/html -d example.com"
  },
  {
    id: "le-4",
    command: "certbot renew",
    description: "Renueva todos los certificados que vencerán pronto",
    category: "letsencrypt",
    example: "certbot renew --dry-run"
  },
  {
    id: "le-5",
    command: "certbot certificates",
    description: "Lista todos los certificados gestionados por Certbot",
    category: "letsencrypt",
    example: "certbot certificates"
  },
  {
    id: "le-6",
    command: "certbot delete",
    description: "Elimina un certificado",
    category: "letsencrypt",
    example: "certbot delete --cert-name example.com"
  },
  {
    id: "le-7",
    command: "certbot revoke",
    description: "Revoca un certificado",
    category: "letsencrypt",
    example: "certbot revoke --cert-path /etc/letsencrypt/live/example.com/cert.pem"
  },
  {
    id: "le-8",
    command: "certbot update_account",
    description: "Actualiza la información de la cuenta",
    category: "letsencrypt",
    example: "certbot update_account --email nuevo@ejemplo.com"
  },
  {
    id: "le-9",
    command: "certbot show_account",
    description: "Muestra información de la cuenta",
    category: "letsencrypt",
    example: "certbot show_account"
  },
  {
    id: "le-10",
    command: "certbot rollback",
    description: "Revierte los cambios de configuración",
    category: "letsencrypt",
    example: "certbot rollback"
  },
  {
    id: "le-11",
    command: "certbot --standalone",
    description: "Obtiene un certificado usando el servidor web incorporado",
    category: "letsencrypt",
    example: "certbot --standalone -d example.com"
  },
  {
    id: "le-12",
    command: "certbot --manual",
    description: "Obtiene un certificado manualmente",
    category: "letsencrypt",
    example: "certbot --manual --preferred-challenges dns -d *.example.com"
  },
  {
    id: "le-13",
    command: "certbot enhance",
    description: "Modifica la configuración de seguridad del servidor",
    category: "letsencrypt",
    example: "certbot enhance --hsts example.com"
  },
  {
    id: "le-14",
    command: "certbot install",
    description: "Instala un certificado existente",
    category: "letsencrypt",
    example: "certbot install --cert-name example.com"
  },
  {
    id: "le-15",
    command: "certbot register",
    description: "Registra una nueva cuenta",
    category: "letsencrypt",
    example: "certbot register --email admin@example.com"
  }
];