"use client";

import { TMovie } from "@/interfaces/TMovie";
import getMovieImage from "@/lib/getMovieImage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import slugify from "slugify";

interface MoviePreviewItemProps {
  movie: TMovie;
  tag?: string;
}
export default function MoviePreviewItem({
  movie,
  tag,
}: MoviePreviewItemProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(
          `/movie/${slugify(movie.title, { lower: true })}.${movie.id}`,
        );
      }}
      className="rounded-2xl cursor-pointer overflow-hidden relative border dark:border-zinc-900 shadow-sm flex flex-col"
    >
      <Image
        src={getMovieImage(movie.poster_path) || "/placeholder.png"}
        alt={movie.title}
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={"/placeholder.png"}
        className="w-full aspect-[3/4] object-cover hover:transform hover:scale-110 transition-all duration-300"
      />
      <div className="absolute top-0 left-0">
        {tag && (
          <div className="bg-zinc-900 text-gray-200 text-sm font-semibold px-2 py-1 rounded-br-2xl">
            {tag}
          </div>
        )}
      </div>
      <div className="flex-grow p-4 bottom-0 h-1/2 w-full flex flex-col justify-end from-60% bg-gradient-to-t text-neutral-300 from-zinc-950/90 to-transparent absolute">
        <div className="uppercase hyphens-auto font-semibold line-clamp-2">
          {movie.title}
        </div>
        <div className="text-sm"> {movie.vote_average.toFixed(1)} ⭐ </div>
      </div>
    </div>
  );
}
