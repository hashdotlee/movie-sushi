import useSearchMovie from "@/hooks/useSearchMovie";
import getMovieImage from "@/lib/getMovieImage";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { movies, search, setSearch } = useSearchMovie("");
  const router = useRouter();
  return (
    <div className="relative w-full sm:block hidden max-w-xl">
      <label className="rounded-2xl bg-gray-200 border bg-transparent dark:border-zinc-700 dark:text-neutral-400 flex items-center gap-2 px-4 py-2">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <input
          type="text"
          value={search}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies"
          className="bg-transparent focus:outline-none w-full"
        />
        {!movies?.results || movies?.results?.length === 0 ? null : (
          <div
            className={`${isOpen ? "flex" : "hidden"}
        rounded-xl top-full left-0 w-full bg-gray-200 min-h-12 max-h-72 overflow-y-scroll mt-1 dark:text-neutral-200 flex-col p-2 dark:bg-zinc-900
      absolute -z-[1] 
      `}
          >
            {movies?.results?.map((movie) => (
              <div
                key={movie.id}
                onMouseDown={() => {
                  router.push(
                    `/movie/${slugify(movie.title, { lower: true })}.${
                      movie.id
                    }`,
                  );
                }}
                className="flex items-center cursor-pointer hover:bg-zinc-800 gap-2 p-2 rounded-xl"
              >
                <Image
                  src={getMovieImage(movie.poster_path) || "/placeholder.png"}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-lg aspect-square"
                />
                <div className="flex flex-col">
                  <p className="font-semibold line-clamp-2">{movie?.title}</p>
                  <p className="text-sm line-clamp-2">
                    {movie?.original_title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  );
}
