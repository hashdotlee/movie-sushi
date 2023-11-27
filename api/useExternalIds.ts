import { TExternalId } from "@/interfaces/TExternalId";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useExternalIds(id: number) {
  const { data: externalIds } = useQuery<TExternalId>({
    queryKey: ["movie", id, "externalIds"],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}/external_ids`),
  });
  return { externalIds };
}
