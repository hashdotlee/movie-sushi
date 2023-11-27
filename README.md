This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirement

Assume that you are using linux, mac or windows devices.

- Browser
- Nodejs (18+)
- Corepack enabled

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development guides

### 1.Libraries

1.  nextjs
2.  jest/react-testing-library
3.  tailwindcss
4.  react-paginate
5.  react-toastify
6.  swiper
7.  axios
8.  react-query
9.  mongoose/mongodb

### 2.User Interfaces

In the `app` folder, I have implemented 7 main routes:

1. Home
2. Movie Detail
3. Popular Movie
4. Upcoming Movie
5. Login
6. Logout
7. Signup

One route link to one page.
You can read more about [Routing]('https://nextjs.org/docs/app/building-your-application/routing')

### 3.APIs

I use axios as api client. There are 1 instances create from default axios, `lib/axiosClient`,
are using for querying on client side.

Using `fetch` to query on the server side with `lib/fetchWrapper`.

### 4.Tesing

Run test cases by command:

```bash
pnpm run test
```

### 5.Deployment

I'm using Vercel to deploy this app. Here is [production]("https://ffw-assignment-movie-friends-seven.vercel.app/")

## Q&A
