import MovieDetail from "@/app/(home)/movie/[slug]/page";
import { render } from "@testing-library/react";

jest.mock("../hooks/useMovieDetail", () => {
  return jest.fn().mockReturnValue({
    id: 1,
    title: "Movie 1",
    overview: "Overview 1",
    genres: [{ id: 1, name: "Genre 1" }],
    release_date: "2021-01-01",
    external_ids: {
      imdb_id: "tt1234567",
    },
  });
});

describe("MovieDetail", () => {
  it("should render correctly", async () => {
    const MovieDetailComponent = await MovieDetail({
      params: { slug: "move.1" },
    });
    if (!MovieDetailComponent) return null;
    const { getByTestId } = render(MovieDetailComponent);

    const title = getByTestId("movie_detail-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Movie 1");

    const overview = getByTestId("movie_detail-description");
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent("Overview 1");

    const genre = getByTestId("movie_detail-genre");
    expect(genre).toBeInTheDocument();
    expect(genre).toContainHTML("Genre 1");

    const release_date = getByTestId("movie_detail-release_date");
    expect(release_date).toBeInTheDocument();
    expect(release_date).toHaveTextContent("2021-01-01");

    const imdb_link = getByTestId("movie_detail-imdb");
    expect(imdb_link).toBeInTheDocument();
    expect(imdb_link).toHaveAttribute(
      "href",
      "https://www.imdb.com/title/tt1234567",
    );
  });
});
