"use client";

import { Category, PageView } from "@/utils/types";
import { useLocalStorage } from "@mantine/hooks";
import { ReactNode, createContext, useContext, useState } from "react";

type ConsumerProps = {
  category: Category;
  pageView: PageView;
  setCategory: (category: Category) => void;
  setPageView: (pageView: PageView) => void;
};

type ProviderProps = {
  children: ReactNode;
};

const SettingsContext = createContext<ConsumerProps>({} as ConsumerProps);

export const useConfig = () => useContext(SettingsContext);

export function ConfigProvider({ children }: ProviderProps) {
  const [pageView, setPageView] = useLocalStorage<PageView>({
    key: "pageView",
    defaultValue: "paginated",
  });
  const [category, setCategory] = useState<Category>("top");

  return (
    <SettingsContext.Provider
      value={{
        category,
        pageView: pageView || "paginated",
        setPageView,
        setCategory,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
