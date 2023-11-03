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
import { PageView, pageViews } from "@/utils/constants";
import { BookOpenTextIcon, ChevronDown, MouseIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PageViewDropdown() {
  const { pageView, setPageView, category } = useConfig();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlPageView = searchParams.get("pageView") as PageView;
    if (urlPageView === "infinite") {
      setPageView("infinite");
    } else {
      setPageView("paginated");
    }
  }, [searchParams, setPageView]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          asChild
          variant="ghost"
          className="capitalize text-md p-0 hover:bg-transparent"
        >
          <div className="">
            <div className="me-2">
              {pageView === "infinite" ? (
                <MouseIcon size="1rem" />
              ) : (
                <BookOpenTextIcon size="1rem" />
              )}
            </div>{" "}
            <ChevronDown size="1rem" />
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
                  setPageView(option);
                  router.push(`/${category}?pageView=${option}`);
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
