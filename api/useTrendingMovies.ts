import { TMovie } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useTrendingMovies() {
  const { data: movies } = useQuery<{ results: TMovie[] }>({
    queryKey: ["trending"],
    queryFn: () => axiosClient.get("/trending/movie/week"),
  });
  return { movies };
}
