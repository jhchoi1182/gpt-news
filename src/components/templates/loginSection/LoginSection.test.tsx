import { render, screen, waitFor } from "@testing-library/react";
import LoginSection from ".";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import KakaoRedirect from "../../../pages/kakao";
import { renderWithRouter } from "../../../utils/test/testConfig";

describe("로그인 기능 테스트", () => {
  const user = userEvent.setup();
  const url = `${process.env.REACT_APP_MY_API}/auth/login`;

  render(<LoginSection />);

  const loginButton = screen.getByRole("button", { name: "카카오 로그인" });

  test("로그인 성공 시 200이면 /으로 이동", async () => {
    await user.click(loginButton);

    renderWithRouter(<KakaoRedirect />);

    screen.getByText("로딩중");

    expect(window.location.pathname).toEqual("/");
  });

  test("로그인 성공 시 201이면 /signup으로 이동", async () => {
    server.use(rest.post(url, (req, res, ctx) => res.once(ctx.json({ data: { kakao_access_token: "1" }, code: 201 }))));
    await user.click(loginButton);

    renderWithRouter(<KakaoRedirect />);

    screen.getByText("로딩중");

    expect(window.location.pathname).toEqual("/signup");
  });

  test("로그인 실패 테스트", async () => {
    server.use(rest.post(url, (req, res, ctx) => res.once(ctx.json({ data: { kakao_access_token: "1" }, code: 400 }))));
    await user.click(loginButton);

    renderWithRouter(<KakaoRedirect />);

    screen.getByText("로딩중");

    // const errorAlert = screen.getByRole("alert");
    // screen.getByText("로그인 에러");
    // expect(errorAlert).toBeInTheDocument();
    expect(window.location.pathname).toEqual("/");
  });
});
