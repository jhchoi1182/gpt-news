import { Logo } from "../../components/atoms/icons";
import tagBasket from "../../assets/tagBasket.webp";
import LoginSection from "../../components/templates/loginSection";

export default function Login() {
  return (
    <main className="flex">
      <LoginSection />
      <section className="basis-1/3 flex justify-center">
        <Logo />
      </section>
      <section className="basis-1/3">
        <img className="h-full" src={tagBasket} alt="태그 바구니 이미지" />
      </section>
    </main>
  );
}
