import { Button } from "../../atoms/button";
import { KakaoIcon } from "../../atoms/icons";

export default function KakaoLoginButton() {
  const REST_API = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Button className="gap-4 bg-yellow-300 w-full" onClick={handleLogin} size="big">
      <KakaoIcon size={25} />
      <span>카카오 로그인</span>
    </Button>
  );
}
