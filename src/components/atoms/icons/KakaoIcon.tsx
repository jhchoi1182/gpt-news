import { RiKakaoTalkFill } from "react-icons/ri";

interface IKakao {
  size: number;
}

export default function KakaoIcon({ size }: IKakao) {
  return <RiKakaoTalkFill size={size} />;
}
