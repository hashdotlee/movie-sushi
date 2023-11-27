"use client";

import usePopularMovie from "@/hooks/usePopularMovie";
import { SortBy } from "@/interfaces/IFilterMovie";
import MoviePreviewList from "../MoviePreviewList";
import Pagination from "@/app/components/Pagination";
import MoviePreviewListSkeleton from "@/app/components/MoviePreviewListSkeleton";

export default function PopularMovieList() {
  const {
    movies = { results: [], total_pages: 0 },
    filter,
    setFilter,
    isFetching,
  } = usePopularMovie({
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: SortBy.POPULARITY,
  });

  if (isFetching) return <MoviePreviewListSkeleton />;

  return (
    <div>
      <div className="my-8 flex justify-between items-center">
        <div>
          <h2 className="leading-2 text-2xl font-semibold my-2 dark:text-zinc-200">
            {" "}
            Popular{" "}
          </h2>
          <div className="border-[8px] border-zinc-900 dark:border-zinc-200 w-[8ch]"></div>
        </div>
      </div>
      <MoviePreviewList movies={movies.results} />
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
