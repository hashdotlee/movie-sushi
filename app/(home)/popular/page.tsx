"use client";

import usePopularMovie from "@/api/usePopularMovie";
import { SortBy } from "@/interfaces/IFilterMovie";
import MoviePreviewList from "../MoviePreviewList";

export default function Popular() {
  const { movies = { results: [] } } = usePopularMovie({
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: SortBy.POPULARITY,
  });
  return (
    <div className="px-4 mt-header dark:bg-zinc-900">
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
    </div>
  );
}
