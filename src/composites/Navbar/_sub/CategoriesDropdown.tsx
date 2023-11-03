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
import { useConfig } from "@/contexts/ConfigProvider";
import { categories } from "@/utils/constants";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CategoriesDropdown() {
  const router = useRouter();
  const { category, setCategory } = useConfig();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button asChild variant="ghost" className="capitalize text-md">
          <div>
            <div className="me-2">{category}</div> <ChevronDown size="1rem" />
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
                setCategory(category);
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
