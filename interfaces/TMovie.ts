import { TCredit } from "./TCredit";
import { TExternalId } from "./TExternalId";
import { TKeyword } from "./TKeyword";
import { TVideo } from "./TVideos";

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieDetail = {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection: null | unknown;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  credits?: TCredit;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos?: { results: TVideo[] };
  keywords?: { keywords: TKeyword[] };
  external_ids?: TExternalId;
  vote_average: number;
  vote_count: number;
};
