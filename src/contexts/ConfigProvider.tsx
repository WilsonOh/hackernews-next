"use client";

import { Category, PageView } from "@/utils/constants";
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
  const [category, setCategory] = useState<Category>("top");
  const [pageView, setPageView] = useState<PageView>("paginated");

  return (
    <SettingsContext.Provider
      value={{
        category,
        pageView,
        setPageView,
        setCategory,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
