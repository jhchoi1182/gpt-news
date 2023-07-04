import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/home";
import Login from "./pages/login";
import KakaoRedirect from "./pages/kakao";
import SignUp from "./pages/signUp";
import Test from "./pages/test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao" element={<KakaoRedirect />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
