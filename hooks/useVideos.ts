import { TVideo } from "@/interfaces/TVideos";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useVideos(id: number) {
  const { data: videos = { results: [] } } = useQuery<{
    results: TVideo[];
  }>({
    queryKey: ["movie", id, "videos"],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}/videos`),
  });
  return { videos };
}
