import type { Metadata } from "next";
//font:
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Next Store",
  description: "Ecommerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
