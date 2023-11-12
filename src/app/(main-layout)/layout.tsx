"use client";

import { DesktopSideNav } from "@/components/SideNav/DesktopView";
import { MobileSideNav } from "@/components/SideNav/MobileView";
import Navbar from "@/composites/Navbar";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSideNav, setShowSideNav] = useState(false);
  const toggleSideNav = () => setShowSideNav((prev) => !prev);
  return (
    <div className="h-screen flex flex-col">
      <Navbar toggleSideNav={toggleSideNav} />
      <div className="flex flex-col lg:flex-row overflow-y-hidden h-full">
        <DesktopSideNav />
        {showSideNav && <MobileSideNav toggleSideNav={toggleSideNav} />}
        <main className="grow overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
