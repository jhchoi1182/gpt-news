import { render, screen } from "@testing-library/react";
import Home from ".";
import { renderWithRouter } from "../../utils/test/testConfig";

describe("홈 화면 테스트", () => {
  render(<Home />);
  const logo = screen.getByRole("img", { name: "로고" });

  const categoryButton = screen.getAllByRole("button");

  test("초기 레이아웃 테스트", async () => {
    renderWithRouter(<Home />);

    expect(logo).toBeInTheDocument();
    expect(categoryButton).toHaveLength(9);
    screen.getByText("인기 뉴스", { exact: false });
    screen.getByText("대가 많이 본", { exact: false });
  });
});

test("카테고리 클릭 테스트", async () => {
  const { user } = renderWithRouter(<Home />, { route: "/signup" });

  const all = screen.getByRole("button", { name: "All" });
  const politics = screen.getByRole("button", { name: "politics" });
  const science = screen.getByRole("button", { name: "science" });

  expect(all).toHaveClass("bg-teal-500");
  expect(politics).not.toHaveClass("bg-teal-500");
  await user.click(politics);
  expect(all).not.toHaveClass("bg-teal-500");
  expect(politics).toHaveClass("bg-teal-500");
  screen.getByText("오늘의 politics 인기 뉴스");
  await user.click(science);
  expect(science).toHaveClass("bg-teal-500");
  expect(politics).not.toHaveClass("bg-teal-500");
  screen.getByText("오늘의 science 인기 뉴스");
});
