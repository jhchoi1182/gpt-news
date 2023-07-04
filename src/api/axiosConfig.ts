import axios from "axios";
import { cookieHandler } from "../utils/hooks";

const { getCookie, removeCookie } = cookieHandler();
export const instance = axios.create({
  baseURL: process.env.REACT_APP_MY_API,
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${getCookie()}`;
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    // removeCookie();
    return Promise.reject(error);
  }
);
