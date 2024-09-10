import type { Metadata } from "next"
import "./globals.css"
import { TopNav } from "@/components/layouts/TopNav"
import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
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
        <TopNav />

        <Container className="flex flex-row gap-x-12">
          <main className="flex-1">{children}</main>
          <aside className="fixed top-24 right-12">asdf</aside>
        </Container>
        {/* < <main className="sticky top-24 flex flex-col items-center">
          <div className="p-12 max-w-5xl w-full">>
           
          </div>
        </main> */}
      </body>
    </html>
  )
}

// // 14
