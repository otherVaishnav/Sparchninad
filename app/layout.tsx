import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "SparshNinaad Foundation - Where Music Meets Meaning",
  description: "SparshNinaad Foundation is a public charitable trust dedicated to classical music and social causes.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
