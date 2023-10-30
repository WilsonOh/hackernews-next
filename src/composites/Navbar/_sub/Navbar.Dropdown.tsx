import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category, categories } from "@/utils/constants";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  currentCategory: Category;
  setCurrentCategory: (category: Category) => void;
};

export function NavbarDropdown({ currentCategory, setCurrentCategory }: Props) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button asChild variant="ghost" className="capitalize text-md">
          <div>
            <div className="me-2">{currentCategory}</div>{" "}
            <ChevronDown size="1rem" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">
          Categories
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              className="justify-center capitalize"
              onClick={() => {
                setCurrentCategory(category);
                router.push(`/${category}`);
              }}
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
