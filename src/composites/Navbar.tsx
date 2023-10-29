"use client";

import { cn } from "@/lib/utils";
import { Category, categories } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex flex-wrap justify-between bg-primary h-1/2 text-center p-2 sticky top-0 shadow-md">
      <div className="flex gap-4">
        <Link href="/">
          <Image src="/y18.svg" alt="y18 logo" width="25" height="25" />
        </Link>
        <ul className="flex gap-4 h-full">
          {categories.map((category) => {
            const currentCategory = pathName.slice(1) as Category;
            const navItemClass = cn({
              "capitalize text-accent-foreground hover:text-muted-foreground border-b-2 border-transparent hover:border-b-secondary-foreground h-full":
                true,
              "border-b-secondary-foreground":
                categories.includes(currentCategory) &&
                category === currentCategory,
            });
            return (
              <li key={category} className={navItemClass}>
                <a href={`/${category}`} className="">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
