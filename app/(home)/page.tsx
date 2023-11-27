import { Metadata } from "next";
import Banner from "./Banner";
import DiscoverMovieList from "./DiscoverMovieList";

export const metadata: Metadata = {
  title: "Home Page",
  description: "A social network for movie lovers. Join now!",
  keywords: "movie, friends, social, network, movie friends",
};

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
