# Hackernews in Nextjs
This is a project I created out of my own interest to learn more about [Nextjs app router](https://nextjs.org/docs/app), [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) and styling with [tailwindcss](https://tailwindcss.com/) and [shadcn](https://ui.shadcn.com/).
I have also challenged myself to make the website responsive on mobile as well. 
The web app is currently [deployed](https://hackernews-next-wilsonoh.vercel.app) on vercel. (excuse the default domain, I haven't bought a custom one yet)

# Tech stack used
* [Next.js 14](https://nextjs.org/)
* [tailwindcss](https://tailwindcss.com/)
* [shadcn](https://ui.shadcn.com/)
* [zod](https://zod.dev/)

# Screenshots
<img width="500" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/dc372b22-9538-4f99-9857-dc8d7f8faec6">
<img width="500" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/34c17801-caed-4185-8bf2-e1e264e31db2">
<img width="139" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/84254fce-3cce-4cce-9155-6691b354ba26">
<img width="139" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/41b03bda-fefc-4526-aa1a-8cd1b45dd9c3">

# Roadmap
* [x] Pages for each stories category (best, new, job etc.)
* [x] Card view of items for each stories page
* [x] Item page with collapsible comments
* [x] Mobile responsive view for stories page and item page
* [ ] Sorting of stories by score, number of comments, date created etc.
* [ ] Filtering of stories by score, date created, date range etc.
* [ ] Implement bookmarking of items using local storage (probably not gonna use/host a DB for this)

# Not going to do (probably)
* Implement the user page
* Implement search
* Anything that requires authentication like logging in, voting, posting etc. (since there's no official API support) Still might do this in the future with NextAuth though

# Credits
* [Hackernews API](https://github.com/HackerNews/API)
* [This project](https://github.com/say4n/hn) for inspiring me to do a hackernews clone using Next.js
* [Harmonic-HN](https://github.com/SimonHalvdansson/Harmonic-HN) for inspiration for the UI
