import type { Metadata } from "next"
import "./globals.css"
import { TopNav } from "@/components/layouts/TopNav"
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
      <body className="font-pretendard">
        <TopNav />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  )
}
