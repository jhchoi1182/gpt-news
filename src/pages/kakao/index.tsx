import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import { cookieHandler } from "../../utils/hooks";

export default function KakaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const loginFetch = useCallback(async () => {
    const data = await authAPI.login(code);
    if (data.code === 200) return navigate("/");
    if (data.code === 201) return navigate("/signup");
    alert("로그인 에러");
    navigate("/");
  }, [code, navigate]);

  useEffect(() => {
    loginFetch();
  }, [loginFetch]);

  return <div>로딩중</div>;
}
