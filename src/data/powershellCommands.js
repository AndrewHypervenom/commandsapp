export const commands = [
  {
    id: "ps-1",
    command: "Get-Process",
    description: "Lista todos los procesos en ejecución",
    category: "powershell",
    example: "Get-Process | Where-Object {$_.CPU -gt 100}"
  },
  {
    id: "ps-2",
    command: "Get-Service",
    description: "Lista todos los servicios del sistema",
    category: "powershell",
    example: "Get-Service | Where-Object {$_.Status -eq 'Running'}"
  },
  {
    id: "ps-3",
    command: "Start-Service",
    description: "Inicia un servicio Windows",
    category: "powershell",
    example: "Start-Service -Name 'wuauserv'"
  },
  {
    id: "ps-4",
    command: "Get-ChildItem",
    description: "Lista archivos y carpetas (equivalente a dir/ls)",
    category: "powershell",
    example: "Get-ChildItem -Path C:\\ -Recurse -Filter *.txt"
  },
  {
    id: "ps-5",
    command: "New-Item",
    description: "Crea nuevos archivos o carpetas",
    category: "powershell",
    example: "New-Item -Path 'C:\\temp' -ItemType Directory"
  },
  {
    id: "ps-6",
    command: "Copy-Item",
    description: "Copia archivos y carpetas",
    category: "powershell",
    example: "Copy-Item 'C:\\origen' 'D:\\destino' -Recurse"
  },
  {
    id: "ps-7",
    command: "Remove-Item",
    description: "Elimina archivos y carpetas",
    category: "powershell",
    example: "Remove-Item 'C:\\temp\\*' -Recurse -Force"
  },
  {
    id: "ps-8",
    command: "Get-Content",
    description: "Muestra el contenido de un archivo",
    category: "powershell",
    example: "Get-Content log.txt -Tail 10"
  },
  {
    id: "ps-9",
    command: "Set-Content",
    description: "Escribe contenido en un archivo",
    category: "powershell",
    example: "Set-Content -Path file.txt -Value 'Nuevo contenido'"
  },
  {
    id: "ps-10",
    command: "Get-EventLog",
    description: "Obtiene eventos del registro de Windows",
    category: "powershell",
    example: "Get-EventLog -LogName System -Newest 10"
  },
  {
    id: "ps-11",
    command: "Invoke-RestMethod",
    description: "Realiza peticiones HTTP/REST",
    category: "powershell",
    example: "Invoke-RestMethod -Uri 'https://api.ejemplo.com/datos'"
  },
  {
    id: "ps-12",
    command: "Get-WmiObject",
    description: "Obtiene información WMI del sistema",
    category: "powershell",
    example: "Get-WmiObject -Class Win32_LogicalDisk"
  },
  {
    id: "ps-13",
    command: "Test-Connection",
    description: "Comprueba la conectividad de red",
    category: "powershell",
    example: "Test-Connection -ComputerName 'servidor01' -Count 4"
  },
  {
    id: "ps-14",
    command: "Get-NetAdapter",
    description: "Muestra información de adaptadores de red",
    category: "powershell",
    example: "Get-NetAdapter | Where-Object Status -eq 'Up'"
  },
  {
    id: "ps-15",
    command: "Export-Csv",
    description: "Exporta datos a archivo CSV",
    category: "powershell",
    example: "Get-Process | Export-Csv procesos.csv"
  }
];