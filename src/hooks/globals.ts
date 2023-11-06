import { categories } from "@/utils/constants";
import { Category, PageView } from "@/utils/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CategoryState = {
  category: Category;
  setCategory: (category: Category) => void;
};

type PageViewState = {
  pageView: PageView;
  setPageView: (pageView: PageView) => void;
};

export const usePageView = create<PageViewState>()(
  persist(
    (set) => ({
      pageView: "paginated",
      setPageView: (pageView: PageView) => set({ pageView }),
    }),
    {
      name: "pageViewStore",
    }
  )
);

export const useCategory = create<CategoryState>()((set) => ({
  category: categories[0],
  setCategory: (category: Category) => set({ category }),
}));
