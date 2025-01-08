import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vietnamese Student Association",
  description: "Voting website for VSAUWB club",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
