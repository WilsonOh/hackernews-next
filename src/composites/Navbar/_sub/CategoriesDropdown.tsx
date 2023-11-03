import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfig } from "@/contexts/ConfigProvider";
import { cn } from "@/lib/utils";
import { categories } from "@/utils/constants";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CategoriesDropdown() {
  const router = useRouter();
  const { category: configCategory, setCategory } = useConfig();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button asChild variant="ghost" className="capitalize text-md">
          <div>
            <div className="me-2">{configCategory}</div>{" "}
            <ChevronDown size="1rem" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {categories.map((category) => {
            const menuItemClass = cn({
              "justify-center capitalize": true,
              "bg-muted-foreground": category === configCategory,
            });
            return (
              <DropdownMenuItem
                key={category}
                className={menuItemClass}
                onClick={() => {
                  setCategory(category);
                  router.push(`/${category}`);
                }}
              >
                {category}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
