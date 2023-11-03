import { categories, pageViews } from "./constants";

export type Category = (typeof categories)[number];

export type PageView = (typeof pageViews)[number];
