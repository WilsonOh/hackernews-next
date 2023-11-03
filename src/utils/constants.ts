export const categories = ["top", "new", "best", "ask", "show", "job"] as const;

export type Category = (typeof categories)[number];

export const pageViews = ["paginated", "infinite"] as const;

export type PageView = (typeof pageViews)[number];

export const apiBaseUrl = "https://hacker-news.firebaseio.com/v0";

export const githubLink = "https://github.com/WilsonOh/hackernews-next";
