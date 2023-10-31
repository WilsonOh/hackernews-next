"use client";

import ThemeToggler from "../ThemeToggler";
import { NavbarDropdown } from "./_sub/Navbar.Dropdown";
import { cn } from "@/lib/utils";
import { Category, categories } from "@/utils/constants";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    categories[0]
  );

  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      return;
    }
    const selectedCategory = pathName.slice(1) as Category;
    if (categories.includes(selectedCategory)) {
      setCurrentCategory(selectedCategory);
    }
  }, [pathName]);

  return (
    <nav className="flex justify-between bg-primary text-center p-2 py-4 shadow-md items-center">
      <Link href="/">
        <Image src="/y18.svg" alt="y18 logo" width="25" height="25" />
      </Link>
      <div className="lg:hidden grow">
        <NavbarDropdown
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </div>
      <div className="hidden lg:flex gap-4">
        <div className="flex gap-4 h-full">
          {categories.map((category) => {
            const navItemClass = cn({
              "capitalize text-accent-foreground hover:text-muted-foreground border-b-2 border-transparent hover:border-b-secondary-foreground h-full":
                true,
              "border-b-secondary-foreground":
                categories.includes(currentCategory) &&
                category === currentCategory,
            });
            return (
              <Link
                key={category}
                href={`/${category}`}
                className={navItemClass}
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ThemeToggler />
        <Link
          href="https://github.com/WilsonOh/hackernews-next"
          target="_blank"
        >
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
