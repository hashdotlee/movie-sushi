import Banner from "./Banner";
import DiscoverMovieList from "./DiscoverMovieList";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="py-8 px-4 dark:bg-zinc-900">
        <DiscoverMovieList />
      </div>
    </>
  );
}
