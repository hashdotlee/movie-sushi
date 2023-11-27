import PopularMovieList from "./PopularMovieList";

export const metadata = {
  title: "Popular | MovieFriends",
  description:
    "Popular movies | MovieFriends, a social network for movie lovers. Join now!",
};

export default function Popular() {
  return (
    <div className="px-4 py-8 mt-header dark:bg-zinc-900">
      <PopularMovieList />
    </div>
  );
}
