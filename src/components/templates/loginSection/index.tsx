import newspaper from "../../../assets/newspaper.webp";
import { KakaoLoginButton } from "../../molecules/button";

export default function LoginSection() {
  return (
    <section className="relative basis-1/3 h-screen">
      <img className="absolute w-full h-screen" src={newspaper} alt="로그인 창 배경" />
      <div className="relative flex flex-col justify-between w-full h-full px-10 py-24 bg-black/50 text-white">
        <div>
          <h2 className="text-4xl mb-10">뉴스를 간편하게</h2>
          <p className="text-xl">뉴칩스로 나의 성장을 기대해보세요.</p>
        </div>
        <div>
          <KakaoLoginButton />
          <ul className="flex justify-center mt-8 gap-4">
            <li className="cursor-pointer">이메일 찾기</li>
            <li className="select-none">|</li>
            <li className="cursor-pointer">비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
