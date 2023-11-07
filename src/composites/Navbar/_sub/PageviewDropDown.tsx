import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useConfig } from "@/contexts/ConfigProvider";
import { BookOpenTextIcon, MouseIcon } from "lucide-react";

export default function PageViewToggler() {
  const { pageView, setPageView } = useConfig();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            asChild
            variant="ghost"
            className="capitalize text-md p-0 hover:bg-transparent"
            onClick={() =>
              setPageView(pageView === "infinite" ? "paginated" : "infinite")
            }
          >
            {pageView === "infinite" ? <MouseIcon /> : <BookOpenTextIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{pageView} view</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
