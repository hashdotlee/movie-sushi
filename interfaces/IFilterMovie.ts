export enum SortBy {
  RELEASE_DATE = "primary_release_date.desc",
  AVERAGE_VOTE = "vote_average.desc",
  POPULARITY = "popularity.desc",
}

export type TFilterMovie = {
  sort_by?: SortBy;
  page?: number;
  language?: string;
  include_adult?: boolean;
  include_video?: boolean;
  with_keywords?: string;
};
