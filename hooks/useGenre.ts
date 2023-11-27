import { TGenre } from "@/interfaces/TGenre";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function useGenre() {
  const { data: genres = { genres: [] } } = useQuery<{ genres: TGenre[] }>({
    queryKey: ["genres"],
    queryFn: () => axiosClient.get(`/genre/movie/list`),
  });
  return { genres };
}

export default useGenre;
