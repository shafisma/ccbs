import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taka",
  description: "The most secure and easy way to track your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
    </ClerkProvider>
  );
}
