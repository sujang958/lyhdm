import type { Metadata } from "next"
import "./globals.css"
import { TopNav } from "@/components/layouts/TopNav"
import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
import { ThemeProvider } from "@/components/ThemeProvider"
import Image from "next/image"
import { CheckIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Sidebar from "@/components/layouts/Sidebar"
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
            <Sidebar />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}

// // 14
