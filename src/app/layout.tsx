import type { Metadata } from "next"
import "./globals.css"
import { TopNav } from "@/components/layouts/TopNav"
import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
import { ThemeProvider } from "@/components/ThemeProvider"
// export const metadata: Metadata = {
//   title: "",
//   description: "",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TopNav />
          <Container className="flex flex-row gap-x-12">
            <main className="flex-1 w-min">{children}</main>
            {/* h-min is the life saver */}
            <aside className="sticky top-24 right-12 h-min min-w-52 max-w-sm">
              asdf
            </aside>
          </Container>
        </ThemeProvider>
        <TopNav />
      </body>
    </html>
  )
}

// // 14
