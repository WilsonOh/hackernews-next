# Hackernews in Nextjs

This is a project I created out of my own interest to learn more about [Nextjs app router](https://nextjs.org/docs/app), [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) and styling with [tailwindcss](https://tailwindcss.com/) and [shadcn](https://ui.shadcn.com/).
I have also challenged myself to make the website responsive on mobile as well.
The web app is currently [deployed](https://hn.oyxw.xyz/) on vercel.

# Tech stack used

- [Next.js 14](https://nextjs.org/) with Typescript
- [tailwindcss](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [zod](https://zod.dev/)

# Running locally

## The usual way

```shell
git clone https://github.com/WilsonOh/hackernews-next.git
npm i
npm run dev
```

## Docker

```shell
git clone https://github.com/WilsonOh/hackernews-next.git
docker build -t <your image name>:<your tag> .
docker run -p 3000:3000 -d <your image name>:<your tag>
```

# Screenshots

<details>
  <summary>Desktop</summary>
  <img width="500" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/e2215bd6-8980-49bc-a762-72d9383f3b88">
  <img width="500" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/6c570e60-b500-4ca2-934e-70fc9bce04a7">
</details>
<details>
  <summary>Mobile</summary>
  <img width="188" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/4bb335a3-cd8d-4678-9c7f-eab6580c2e69">
  <img width="188" alt="image" src="https://github.com/WilsonOh/hackernews-next/assets/87934749/d0b34a8e-6563-4db8-9778-22db48178310">
</details>

# Features
* Dark/Light mode toggle
* Infinite/Paginated view toggle
* Mobile-first design

# Roadmap

- [x] Pages for each stories category (best, new, job etc.)
- [x] Card view of items for each stories page with pagination
- [x] Item page with collapsible comments
- [x] Mobile responsive view for stories page and item page
- [ ] Go between sibling/parent/root nodes in the comments (similar to the original hackernews website)
- [ ] Sorting of stories by score, number of comments, date created etc.
- [ ] Filtering of stories by score, date created, date range etc.
- [ ] Implement bookmarking of items using local storage (probably not gonna use/host a DB for this)

# Not going to do (probably)

- Implement the user page
- Implement search
- Anything that requires authentication like logging in, voting, posting etc. (since there's no official API support) Still might do this in the future with NextAuth though

# Credits

- [Hackernews API](https://github.com/HackerNews/API)
- [This project](https://github.com/say4n/hn) for inspiring me to do a hackernews clone using Next.js
- [Harmonic-HN](https://github.com/SimonHalvdansson/Harmonic-HN) for inspiration for the UI
