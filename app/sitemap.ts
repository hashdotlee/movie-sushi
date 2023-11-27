import { TMovie } from "@/interfaces/TMovie";
import fetchWrapper from "@/lib/fetchWrapper";
import slugify from "slugify";

const getMovies = async () => {
  const res = await fetchWrapper("/treanding/movie/week");
  const movies = await res.results;
  return movies;
};

export default async function sitemap() {
  const movies = await getMovies();

  return [
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
}
