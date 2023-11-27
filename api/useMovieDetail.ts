import { TMovieDetail } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useMovieDetail(id: number) {
  const { data: movie } = useQuery<TMovieDetail>({
    queryKey: ["movie", id],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}`),
  });
  return { movie };
}
