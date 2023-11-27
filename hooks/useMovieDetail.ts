import { TMovieDetail } from "@/interfaces/TMovie";
import fetchWrapper from "@/lib/fetchWrapper";

export default async function useMovieDetail(id: number) {
  if (!id) return null;
  const movie = await fetchWrapper(
    `/movie/${id}?append_to_response=videos,genres,keywords,external_ids,credits`,
  ).then((res) => res as TMovieDetail);
  return movie;
}
