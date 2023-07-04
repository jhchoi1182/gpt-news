import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_MY_API}/auth/login`, (req, res, ctx) => {
    return res(ctx.json({ data: { kakao_access_token: "1" }, code: 200 }));
  }),
];
