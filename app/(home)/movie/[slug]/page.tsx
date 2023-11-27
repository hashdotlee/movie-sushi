import CategoryList from "@/app/components/CategoryList";
import NoImage from "@/app/components/NoImage";
import SocialList from "@/app/components/SocialList";
import fetchMovieDetail from "@/hooks/useMovieDetail";
import getMovieImage from "@/lib/getMovieImage";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split(".").pop();
  const movie = await fetchMovieDetail(Number(id));
  if (!movie)
    return {
      title: `MovieFriends`,
      description: "A social network for movie lovers. Join now!",
    };

  return {
    title: `${movie.title} | MovieFriends`,
    description: movie.overview,
    keywords: movie?.keywords?.keywords.map((item) => item.name).join(", "),
    openGraph: {
      title: `${movie.title} | MovieFriends`,
      type: "website",
      locale: "en_IE",
      url: `https://ffw-assignment-movie-friends-seven.vercel.app/movie/${slug}`,
      siteName: "MovieFriends",
      images: [
        {
          url: getMovieImage(movie.poster_path) || "/placeholder.png",
          width: 800,
          height: 600,
          alt: movie.title,
        },
      ],
    },
  };
}

export default async function MovieDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split(".").pop();
  const movie = await fetchMovieDetail(Number(id));

  if (!movie) return null;
  return (
    <div>
      <div className="relative max-h-[50vh] overflow-hidden h-screen">
        {movie.backdrop_path ? (
          <Image
            src={
              getMovieImage(movie?.backdrop_path, "original") ||
              "/placeholder.png"
            }
            alt={movie.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover object-center"
          />
        ) : (
          <NoImage />
        )}
        <div className="absolute top-0 z-10 left-0 w-full h-full from-zinc-900/20 to-current bg-gradient-radial"></div>
      </div>
      <div className="flex flex-col xl:flex-row lg:gap-8 gap-2 px-16 my-4">
        <Image
          src={getMovieImage(movie.poster_path) || "/placeholder.png"}
          alt={movie.title}
          width={0}
          placeholder="blur"
          blurDataURL={"/placeholder.png"}
          height={0}
          sizes="100vw"
          className="w-48 h-72 z-20 hidden xl:block lg:-translate-y-1/2 object-center rounded-xl aspect-[3/4] object-cover"
        />
        <div className="flex flex-col lg:flex-row gap-8 dark:text-zinc-200 w-full">
          <div className=" max-w-prose flex flex-col gap-4 flex-grow">
            <div className="">
              <h1 className="text-3xl font-bold my-3">{movie.title}</h1>
              <div className="flex gap-1 text-neutral-600 dark:text-zinc-400 items-center text-sm">
                <div>
                  {movie.vote_average.toFixed(1)} ⭐ ({movie.vote_count} votes)
                </div>
                <span>&bull;</span>
                <div>
                  {movie?.genres?.map((genre, i) => (
                    <Fragment key={i}>
                      <span className="text-sm">{genre.name}</span>
                      {i < movie.genres.length - 1 && <span>, </span>}
                    </Fragment>
                  ))}
                </div>
                <span>&bull;</span>
                <div>
                  <span>{(movie.runtime / 60).toFixed(0)}h</span>
                  <span>{movie.runtime % 60}m</span>
                </div>
              </div>
              <p className="text-sm my-2">{movie.overview}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Cast</h3>
              <div className="flex gap-2 p-4">
                {movie?.credits?.cast?.slice(0, 5)?.map((cast) => (
                  <div
                    key={cast.id}
                    className="flex w-1/5 text-center flex-col items-center"
                  >
                    <Image
                      src={
                        getMovieImage(cast.profile_path, "w500") ||
                        "/default_avatar.svg"
                      }
                      width={0}
                      height={0}
                      alt={cast.name}
                      sizes="100vw"
                      className="object-cover object-center aspect-square w-16 h-16 rounded-full"
                    />
                    <div className="text-sm">{cast.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold my-3">Videos</h3>
              <div className=" overflow-x-scroll">
                <div className="flex gap-4">
                  {movie?.videos?.results?.map((video) => (
                    <iframe
                      key={video.id}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video player"
                      className="border-0 rounded-2xl w-full h-auto aspect-video shrink-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold my-2">IMDb</h3>
            <Link
              href={`https://www.imdb.com/title/${movie?.external_ids?.imdb_id}`}
              className="font-semibold flex items-center gap-2 text-blue-800 dark:text-blue-400"
            >
              <Image src="/imdb-icon.svg" width={48} height={48} alt="imdb" />
            </Link>
            <div>
              <h3 className="font-semibold my-2">Budget</h3>
              <p>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div>
              <h3 className="font-semibold my-2">Release Date</h3>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <h3 className="font-semibold my-2">Social</h3>
              <SocialList externalIds={movie?.external_ids} />
            </div>
            <div>
              <h3 className="font-semibold my-2">Popularity</h3>
              {movie.popularity}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Keywords</h3>
              <CategoryList
                categories={
                  movie?.keywords?.keywords?.slice(0, 10).map((item) => ({
                    ...item,
                    value: item.name,
                  })) || []
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
