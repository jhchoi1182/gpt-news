import { Outlet, Navigate } from "react-router-dom";
import { cookieHandler } from "./hooks";

export default function PrivateRoutes() {
  const { getCookie } = cookieHandler();
  const token = getCookie();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
