export const commands = [
  {
    id: "certbot-1",
    command: "certbot certonly",
    description: "Obtiene un certificado sin instalarlo",
    category: "certbot",
    example: "certbot certonly --webroot -w /var/www/html -d ejemplo.com"
  },
  {
    id: "certbot-2",
    command: "certbot renew",
    description: "Renueva todos los certificados que vencerán pronto",
    category: "certbot",
    example: "certbot renew --dry-run"
  }
];