import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePageView } from "@/hooks/globals";
import { cn } from "@/lib/utils";
import { pageViews } from "@/utils/constants";
import { PageView } from "@/utils/types";
import { BookOpenTextIcon, ChevronDown, MouseIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function PageViewDropdown() {
  const { pageView: statePageView, setPageView: stateSetPageView } =
    usePageView();
  const [pageView, setPageView] = useState<PageView>("paginated");

  useEffect(() => {
    setPageView(statePageView);
  }, [statePageView]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          asChild
          variant="ghost"
          className="capitalize text-md p-0 hover:bg-transparent"
        >
          <div className="">
            <div className="me-2 max-w-4 lg:max-w-8">
              {pageView === "infinite" ? <MouseIcon /> : <BookOpenTextIcon />}
            </div>{" "}
            <ChevronDown />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {pageViews.map((option) => {
            const menuItemClass = cn({
              "justify-center capitalize": true,
              "bg-muted-foreground": option === pageView,
            });
            return (
              <DropdownMenuItem
                key={option}
                className={menuItemClass}
                onClick={() => {
                  stateSetPageView(option);
                }}
              >
                {option} view
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
