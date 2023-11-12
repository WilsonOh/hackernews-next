import ThemeToggler from "../ThemeToggler";
import PageViewToggler from "./_sub/PageviewDropDown";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/contexts/ConfigProvider";
import { categories } from "@/utils/constants";
import { githubLink } from "@/utils/links";
import { Category } from "@/utils/types";
import { GithubIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  toggleSideNav: () => void;
};

export default function Navbar({ toggleSideNav }: Props) {
  const { setCategory: setConfigCategory } = useConfig();

  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      return;
    }
    const selectedCategory = pathName.slice(1) as Category;
    if (categories.includes(selectedCategory)) {
      setConfigCategory(selectedCategory);
    }
    // eslint-disable-next-line
  }, [pathName]);

  return (
    <nav className="flex justify-between bg-primary text-center p-2 py-4 shadow-md items-center">
      <div className="flex gap-2 items-center">
        <Button onClick={toggleSideNav} className="lg:hidden">
          <MenuIcon />
        </Button>
        <Link href="/">
          <Image src="/y18.svg" alt="y18 logo" width="25" height="25" />
        </Link>
      </div>
      {/* <div className="lg:hidden grow">
        <CategoriesDropdown />
      </div> */}
      {/* <div className="hidden lg:flex gap-4 items-baseline">
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
                onClick={() => setConfigCategory(category)}
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div> */}
      <div className="flex gap-2 items-center">
        <PageViewToggler />
        <ThemeToggler />
        <Link href={githubLink} target="_blank">
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
