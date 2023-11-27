import { TMovie } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function useUpcomingMovie() {
  const { data: movies = { results: [] } } = useQuery<{ results: TMovie[] }>({
    queryKey: ["movies"],
    queryFn: () => axiosClient.get(`/movie/upcoming`),
  });
  return { movies };
}

export default useUpcomingMovie;
