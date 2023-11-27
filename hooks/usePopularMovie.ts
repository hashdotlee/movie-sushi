import { TFilterMovie } from "@/interfaces/IFilterMovie";
import { TMovie } from "@/interfaces/TMovie";
import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function usePopularMovie(initFilter: TFilterMovie) {
  const [filter, setFilter] = useState<TFilterMovie>(initFilter);
  const { data: movies = { results: [], total_pages: 0 }, isFetching } =
    useQuery<{ results: TMovie[]; total_pages: number }>({
      queryKey: ["movies", filter],
      queryFn: () => axiosClient.get(`/discover/movie`, { params: filter }),
    });
  return { movies, filter, setFilter, isFetching };
}

export default usePopularMovie;
