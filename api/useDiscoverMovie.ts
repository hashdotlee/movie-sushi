import { TFilterMovie } from "@/interfaces/IFilterMovie";
import { TMovie } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function useDiscoverMovie(initFilter: TFilterMovie) {
  const [filter, setFilter] = useState<TFilterMovie>(initFilter);

  const { data: movies = { results: [] } } = useQuery<{ results: TMovie[] }>({
    queryKey: ["movies", filter],
    queryFn: () =>
      axiosClient.get(`/discover/movie`, {
        params: filter,
      }),
  });

  return { movies, setFilter, filter };
}

export default useDiscoverMovie;
