import "./globals.css";
import Navbar from "@/composites/Navbar";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackerNews in Nextjs",
  description: "HackerNews in Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="md:container bg-background">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
