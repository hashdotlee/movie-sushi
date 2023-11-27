"use client";

import { TMovie } from "@/interfaces/TMovie";
import MoviePreviewItem from "@/app/components/MoviePreviewItem";

interface MoviePreviewListProps {
  movies: TMovie[];
  tag?: boolean;
}
export default function MoviePreviewList({ movies }: MoviePreviewListProps) {
  return (
    <div className="grid 2xl:grid-cols-6 2xl:gap-8 xl:grid-cols-4 xl:gap-6 md:grid-cols-3 gap-4 grid-cols-2">
      {movies.map((movie) => (
        <MoviePreviewItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
