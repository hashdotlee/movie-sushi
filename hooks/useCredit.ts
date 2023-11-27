import { TCredit } from "@/interfaces/TCredit";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function useCredits(id: number) {
  const { data: credits } = useQuery<TCredit>({
    queryKey: ["movie", id, "credits"],
    enabled: !!id,
    queryFn: () => axiosClient.get(`/movie/${id}/credits`),
  });
  return { credits };
}

export default useCredits;
