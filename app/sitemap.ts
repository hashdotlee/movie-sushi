import { TMovie } from "@/interfaces/TMovie";
import slugify from "slugify";

const getMovies = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/treanding/movie/week",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  const movies = await res.results;

  return movies;
};

export default async function sitemap() {
  const staticData = [
    {
      url: "https://ffw-assignment-movie-friends-seven.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ffw-assignment-movie-friends-seven.vercel.app/popular",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://ffw-assignment-movie-friends-seven.vercel.app/upcoming",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  const movies = await getMovies();

  if (!movies) return staticData;

  const dynamicData = [
    ...movies.map((movie: TMovie) => ({
      url: `https://ffw-assignment-movie-friends-seven.vercel.app/movie/${slugify(
        movie.title,
        { lower: true },
      )}.${movie.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];

  return [...staticData, ...dynamicData];
}
