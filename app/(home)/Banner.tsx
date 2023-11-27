import useTrendingMovies from "@/api/useTrendingMovies";
import getMovieImage from "@/lib/getMovieImage";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import NoImage from "../components/NoImage";
import Slider from "../components/Slider";
import { TMovie } from "@/interfaces/TMovie";

export default async function Banner() {
  const movies = await useTrendingMovies<TMovie[]>();
  return (
    <div className="max-h-[80vh] relative overflow-hidden">
      <Slider
        slides={movies?.map((movie) =>
          movie.backdrop_path ? (
            <div key={movie.id}>
              <Image
                src={getMovieImage(movie.backdrop_path, "original")}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={"/placeholder.png"}
                className=" w-full h-screen max-h-[80vh]  object-cover object-center"
              />
              <div className="absolute top-0 z-10 flex items-center px-8 left-0 w-full h-full from-zinc-900/20 to-current bg-gradient-radial">
                <div className="text-zinc-200 max-w-prose mt-header">
                  <h1 className="xl:text-5xl md:text-3xl text-xl font-bold lg:line-clamp-2 lg:my-4 line-clamp-1">
                    {movie.title}
                  </h1>
                  <p className="xl:text-xl text-lg md:line-clamp-none line-clamp-2">
                    {movie.overview}
                  </p>
                  <p className="xl:text-xl text-lg mt-2">
                    <span className="font-bold">Release:</span>{" "}
                    {movie.release_date}
                  </p>
                  <p className="xl:text-xl text-lg mt-2">
                    <span className="font-bold">TMDb:</span>{" "}
                    {movie.vote_average.toFixed(1)} ⭐
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href={`/detail/${movie.id}`}
                      className="bg-zinc-200 text-zinc-900 flex gap-2 items-center text-sm lg:text-base xl:text-lg px-4 py-2 rounded-lg"
                    >
                      <InformationCircleIcon className="w-6 h-6" />
                      <span className="">More info</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NoImage key={movie.id} />
          ),
        )}
      />
    </div>
  );
}
