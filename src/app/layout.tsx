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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} bg-background`}>
          <Navbar />
          <main className="md:container">{children}</main>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
