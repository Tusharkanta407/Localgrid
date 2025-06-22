import type { ReactNode } from "react"

export const metadata = {
  title: "LocalGrid – Local Services Platform",
  description: "Empowering India's Local Workforce",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white">{children}</body>
    </html>
  )
}
