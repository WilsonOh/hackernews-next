import "./globals.css";
import Navbar from "@/composites/Navbar";
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
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <Navbar />
        <main className="md:container">{children}</main>
      </body>
    </html>
  );
}
