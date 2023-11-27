import Popular from "@/app/(home)/popular/page";
import { render } from "@testing-library/react";

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

describe("Popular", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Popular />);
    expect(getByText("Popular")).toBeInTheDocument();
  });
});
