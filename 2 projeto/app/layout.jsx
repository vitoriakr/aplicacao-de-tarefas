import "./globals.css"

export const metadata = {
  title: "Lista de Tarefas - Organize seu dia",
  description: "Aplicação simples e eficiente para gerenciar suas tarefas diárias",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
