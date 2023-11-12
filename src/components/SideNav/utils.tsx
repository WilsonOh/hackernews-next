import { SideNavLink } from "./types";
import { Category } from "@/utils/types";
import {
  AlignStartHorizontal,
  BriefcaseIcon,
  FlameIcon,
  MailQuestionIcon,
  NewspaperIcon,
  PresentationIcon,
} from "lucide-react";
import { ReactNode } from "react";

const categoryMap: { [key in Category]: { label: string; icon: ReactNode } } = {
  top: {
    label: "Top",
    icon: <AlignStartHorizontal />,
  },
  new: {
    label: "New",
    icon: <NewspaperIcon />,
  },
  best: {
    label: "Best",
    icon: <FlameIcon />,
  },
  ask: {
    label: "Ask HN",
    icon: <MailQuestionIcon />,
  },
  show: {
    label: "Show HN",
    icon: <PresentationIcon />,
  },
  job: {
    label: "Jobs",
    icon: <BriefcaseIcon />,
  },
};

export function categoryToLabel(category: Category): SideNavLink {
  return { ...categoryMap[category], href: `/${category}` };
}
