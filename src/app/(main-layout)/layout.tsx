"use client";

import Navbar from "@/composites/Navbar";
import DesktopSideNav from "@/composites/SideNav/DesktopView";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col lg:flex-row overflow-y-hidden h-full">
        <DesktopSideNav />
        <main className="grow overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
