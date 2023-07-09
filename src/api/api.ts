import { cookieHandler } from "../utils/hooks";
import { instance } from "./axiosConfig";

// type Profile = {
//   name: string;
//   birthday: string;
//   sex: string;
//   category: string[];
//   age: string;
// };
type Category =
  | "All"
  | "business"
  | "entertainment"
  | "politics"
  | "science"
  | "sports"
  | "technology"
  | "world"
  | "lifestyle";

const { setCookie } = cookieHandler();

export const authAPI = {
  login: async (code: string | null) => {
    const { data } = await instance.post("/auth/login", { code });
    setCookie(data.data.kakao_access_token);
    return data;
  },
};

export const profileAPI = {
  create: async (payload: FormData) => {
    return await instance.post("/profile/create_profile", payload);
  },
};

export const newsAPI = {
  todayTop: async (page = 1) => {
    return await instance.post("/news/getTodayTopNews", { page });
  },
  todayTopAndAge: async (age: string, page = 1) => {
    return await instance.post("/news/getTodayTopNewsByAge", { age, page });
  },
  category: async (category: string, page = 1) => {
    return await instance.post("/news/topNewsByCategory", { category, page });
  },
  categoryAndAge: async (category: string, age: string, page = 1) => {
    return await instance.post("/news/topNewsByCategoryAndAge", { category, age, page });
  },
};
