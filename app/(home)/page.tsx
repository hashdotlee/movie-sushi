"use client";

import useDiscoverMovie from "@/api/useDiscoverMovie";
import { SortBy, TFilterMovie } from "@/interfaces/IFilterMovie";
import Banner from "./Banner";
import MoviePreviewList from "./MoviePreviewList";

export default function Home() {
  const initialFilter: TFilterMovie = {
    sort_by: SortBy.RELEASE_DATE,
    page: 1,
    language: "en-US",
    include_adult: false,
    include_video: false,
  };
  const { filter, setFilter, movies } = useDiscoverMovie(initialFilter);

  return (
    <>
      <Banner />
      <div className="py-8 px-4 dark:bg-zinc-900">
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
      </div>
    </>
  );
}
