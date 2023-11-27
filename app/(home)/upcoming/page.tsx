"use client";

import useUpcomingMovie from "@/api/useUpcomingMovie";
import MoviePreviewList from "../MoviePreviewList";

export default function Upcoming() {
  const { movies = { results: [] } } = useUpcomingMovie();

  return (
    <div className="px-4 mt-header dark:bg-zinc-900">
      <div className="my-8 flex justify-between items-center">
        <div>
          <h2 className="leading-2 text-2xl my-2 font-semibold dark:text-zinc-200">
            {" "}
            Upcoming{" "}
          </h2>
          <div className="border-[8px] border-zinc-900 dark:border-zinc-200  w-[8ch]"></div>
        </div>
      </div>
      <MoviePreviewList movies={movies.results} />
    </div>
  );
}
