import { TMovie } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function useSearchMovie(initSearch: string) {
  const [search, setSearch] = useState(initSearch);
  const { data: movies } = useQuery<{ results: TMovie[] }>({
    queryKey: ["movies", search],
    queryFn: () =>
      axiosClient.get(`/search/movie`, {
        params: { query: search },
      }),
  });

  return { search, setSearch, movies };
}

export default useSearchMovie;
