import Header from "@/app/(home)/Header";
import Sidebar from "@/app/(home)/Sidebar";
import Home from "@/app/(home)/page";
import { render } from "@testing-library/react";

jest.mock("../app/(home)/Banner", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Banner</div>;
    },
  };
});

jest.mock("../hooks/useProfile", () => {
  return jest.fn().mockReturnValue(null);
});

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      results: [
        {
          id: 1,
          title: "Movie 1",
          poster_path: "/poster1.jpg",
          overview: "Overview 1",
          backdrop_path: "/backdrop1.jpg",
        },
      ],
    },
    isLoading: false,
    isError: false,
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue("/"),
}));

describe("Home", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Home />);

    const item_link = getByTestId("movie_item-link");
    expect(item_link).toBeInTheDocument();
    expect(item_link).toHaveAttribute("href", "/movie/movie-1.1");

    const item_poster = getByTestId("movie_item-poster");
    expect(item_poster).toBeInTheDocument();
    const src = item_poster.getAttribute("src");
    expect(src).toContain("poster1.jpg");

    const item_title = getByTestId("movie_item-title");
    expect(item_title).toBeInTheDocument();
    expect(item_title).toHaveTextContent("Movie 1");

    const item_description = getByTestId("movie_item-description");
    expect(item_description).toBeInTheDocument();
    expect(item_description).toHaveTextContent("Overview 1");
  });

  it("should display title", () => {
    const { getByText } = render(<Sidebar />);

    expect(getByText("MovieFriends")).toBeInTheDocument();
  });

  it("should have login, signup button", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Log in")).toBeInTheDocument();

    expect(getByText("Sign up")).toBeInTheDocument();
  });
});
