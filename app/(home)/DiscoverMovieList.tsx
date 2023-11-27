"use client";

import useDiscoverMovie from "@/hooks/useDiscoverMovie";
import { SortBy, TFilterMovie } from "@/interfaces/IFilterMovie";
import MoviePreviewList from "./MoviePreviewList";
import Pagination from "../components/Pagination";
import MoviePreviewListSkeleton from "../components/MoviePreviewListSkeleton";

export default function DiscoverMovieList() {
  const initialFilter: TFilterMovie = {
    sort_by: SortBy.RELEASE_DATE,
    page: 1,
    language: "en-US",
    include_adult: false,
    include_video: false,
  };
  const { filter, setFilter, movies, isFetching } =
    useDiscoverMovie(initialFilter);

  if (isFetching) return <MoviePreviewListSkeleton />;

  return (
    <div>
      <div className="flex mb-8 justify-between items-center">
        <div>
          <h2 className="dark:text-neutral-100 my-2 text-2xl font-semibold">
            {" "}
            All Movies{" "}
          </h2>
          <div className="border-[8px] border-zinc-900 dark:border-zinc-50 w-[8ch]"></div>
        </div>
        <select
          onChange={(e) =>
            setFilter({ ...filter, sort_by: e.target.value as SortBy })
          }
          className="bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 rounded-2xl font-semibold lg:max-w-lg md:max-w-md w-[200px] p-4 border shadow-sm"
        >
          <option value={SortBy.RELEASE_DATE}>Latest</option>
          <option value={SortBy.AVERAGE_VOTE}>Most Rated</option>
        </select>
      </div>
      <MoviePreviewList movies={movies?.results} />
      <div className="my-4">
        <Pagination
          page={filter?.page || 1}
          pageCount={movies?.total_pages}
          onPageChange={(data) =>
            setFilter({ ...filter, page: data.selected + 1 })
          }
        />
      </div>
    </div>
  );
}
