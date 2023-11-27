import { TKeyword } from "@/interfaces/TKeyword";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useKeywords(id: number) {
  const { data: keywords = { keywords: [] } } = useQuery<{
    keywords: TKeyword[];
  }>({
    queryKey: ["movie", id, "keywords"],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}/keywords`),
  });
  return { keywords };
}
