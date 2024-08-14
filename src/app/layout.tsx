import "@/app/globals.scss";
import { ConfigProvider } from "@/contexts/ConfigProvider";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackerNews",
  description: "HackerNews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ConfigProvider>
            {children}
            <Analytics />
          </ConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
