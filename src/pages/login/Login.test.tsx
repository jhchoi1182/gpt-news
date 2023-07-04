import { render, screen } from "@testing-library/react";
import Login from ".";

test("로그인 페이지 레이아웃 테스트", () => {
  render(<Login />);

  const headBigText = screen.getByRole("heading", { name: "뉴스를 간편하게" });
  const loginButton = screen.getByRole("button", { name: "카카오 로그인" });
  const tagBasket = screen.getByRole("img", { name: "태그 바구니 이미지" });
  const loginBgImage = screen.getByRole("img", { name: "로그인 창 배경" });
  const logo = screen.getByRole("img", { name: "로고" });
  const liTags = screen.getAllByRole("listitem");

  expect(loginBgImage).toBeInTheDocument();
  expect(headBigText).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(tagBasket).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(liTags.length).toBe(3);
  screen.getByText("뉴칩스로 나의 성장을 기대해보세요.");
  screen.getByText("이메일 찾기");
  screen.getByText("비밀번호 찾기");
});
