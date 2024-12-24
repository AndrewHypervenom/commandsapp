export const commands = [
  {
    id: "ssl-1",
    command: "openssl genrsa -out [archivo].key [bits]",
    description: "Genera una clave privada RSA",
    category: "openssl",
    example: "openssl genrsa -out private.key 2048"
  },
  {
    id: "ssl-2",
    command: "openssl req -new -key [clave].key -out [archivo].csr",
    description: "Genera una solicitud de firma de certificado (CSR)",
    category: "openssl",
    example: "openssl req -new -key private.key -out request.csr"
  },
  {
    id: "ssl-3",
    command: "openssl x509 -in [cert].crt -text",
    description: "Muestra el contenido de un certificado",
    category: "openssl",
    example: "openssl x509 -in certificate.crt -text -noout"
  },
  {
    id: "ssl-4",
    command: "openssl verify [cert].crt",
    description: "Verifica un certificado",
    category: "openssl",
    example: "openssl verify -CAfile ca.crt certificate.crt"
  },
  {
    id: "ssl-5",
    command: "openssl s_client -connect [host:puerto]",
    description: "Prueba una conexión SSL/TLS",
    category: "openssl",
    example: "openssl s_client -connect example.com:443"
  },
  {
    id: "ssl-6",
    command: "openssl rsa -in [clave].key -pubout",
    description: "Extrae la clave pública de una clave privada",
    category: "openssl",
    example: "openssl rsa -in private.key -pubout -out public.key"
  },
  {
    id: "ssl-7",
    command: "openssl req -x509 -new -key [clave].key -out [cert].crt",
    description: "Genera un certificado autofirmado",
    category: "openssl",
    example: "openssl req -x509 -new -key private.key -out cert.crt -days 365"
  },
  {
    id: "ssl-8",
    command: "openssl pkcs12 -export -out [archivo].pfx",
    description: "Crea un archivo PKCS#12 (.pfx/.p12)",
    category: "openssl",
    example: "openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt"
  },
  {
    id: "ssl-9",
    command: "openssl dhparam -out [archivo].pem [bits]",
    description: "Genera parámetros Diffie-Hellman",
    category: "openssl",
    example: "openssl dhparam -out dhparams.pem 2048"
  },
  {
    id: "ssl-10",
    command: "openssl crl -in [archivo].crl -text",
    description: "Muestra el contenido de una lista de revocación",
    category: "openssl",
    example: "openssl crl -in revocation.crl -text -noout"
  },
  {
    id: "ssl-11",
    command: "openssl enc -aes-256-cbc -in [archivo]",
    description: "Encripta un archivo usando AES",
    category: "openssl",
    example: "openssl enc -aes-256-cbc -in plaintext.txt -out encrypted.bin"
  },
  {
    id: "ssl-12",
    command: "openssl rand -out [archivo] [bytes]",
    description: "Genera bytes aleatorios",
    category: "openssl",
    example: "openssl rand -out random.bin 32"
  },
  {
    id: "ssl-13",
    command: "openssl dgst -sha256 [archivo]",
    description: "Calcula el hash de un archivo",
    category: "openssl",
    example: "openssl dgst -sha256 documento.pdf"
  },
  {
    id: "ssl-14",
    command: "openssl ca -in [csr] -out [cert]",
    description: "Firma un CSR como una CA",
    category: "openssl",
    example: "openssl ca -in request.csr -out signed.crt"
  },
  {
    id: "ssl-15",
    command: "openssl x509 -checkend [segundos]",
    description: "Verifica la fecha de vencimiento de un certificado",
    category: "openssl",
    example: "openssl x509 -in cert.pem -checkend 86400"
  }
];