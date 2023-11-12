import { categoryToLabel } from "../utils";
import { cn } from "@/lib/utils";
import { categories } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toggleSideNav?: () => void;
};

export default function NavItemList({ toggleSideNav }: Props) {
  const sideNavLinks = categories.map(categoryToLabel);
  const pathName = usePathname();
  return (
    <ul>
      {sideNavLinks.map((link) => {
        const linkClassName = cn(
          {
            "bg-gray-100 dark:bg-gray-800": pathName === link.href,
          },
          "p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-between rounded-lg"
        );
        return (
          <Link key={link.href} href={link.href} onClick={toggleSideNav}>
            <li className={linkClassName}>
              <div className="flex items-center space-x-3">
                <i>{link.icon}</i>
                <span className="text-sm">{link.label}</span>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
