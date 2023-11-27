import fetchWrapper from "@/lib/fetchWrapper";

export default async function useTrendingMovies<T>() {
  const movies = await fetchWrapper("/trending/movie/week").then(
    (res) => res.results,
  );
  return movies as T;
}
