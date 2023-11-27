import UpcomingMovieList from "./UpcomingMovieList";

export const metadata = {
  title: "Upcoming | MovieFriends",
  description:
    "Upcoming movies | MovieFriends, a social network for movie lovers. Join now!",
};

export default function Upcoming() {
  return (
    <div className="px-4 mt-header dark:bg-zinc-900">
      <UpcomingMovieList />
    </div>
  );
}
