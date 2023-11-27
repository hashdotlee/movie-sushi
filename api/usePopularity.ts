import { TPopularity } from "@/interfaces/TPopularity";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function usePopularity(id: number) {
  const { data: popularity = { popularity: [] } } = useQuery<{
    popularity: TPopularity[];
  }>({
    queryKey: ["movie", id, "popularity"],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}/popularity`),
  });
  return { popularity };
}
