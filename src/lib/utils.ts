import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getWebsiteIcon(url: string) {
  try {
    const parsedUrl = new URL(url);
    const iconUrl = `${parsedUrl.origin}/favicon.ico`;

    const isValidImage = await fetch(iconUrl).then((res) => res.ok);
    if (isValidImage) {
      return iconUrl;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export function getUserProfileLink(user: string) {
  return `https://news.ycombinator.com/user?id=${user}`;
}

export function getUrlDomain(url: string) {
  return new URL(url).hostname;
}

export function getWebsiteFaviconUrl(url: string) {
  const domain = getUrlDomain(url);
  return `https://s2.googleusercontent.com/s2/favicons?domain=${domain}&sz=20`;
}
