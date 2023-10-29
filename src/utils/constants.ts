export const categories = ["top", "new", "best", "ask", "show", "job"] as const;

export type Category = (typeof categories)[number];

export const apiBaseUrl = "https://hacker-news.firebaseio.com/v0";
