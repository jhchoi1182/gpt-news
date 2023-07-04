import { useState } from "react";
import { Button } from "../../components/atoms/button";
import { Logo } from "../../components/atoms/icons";
import { News } from "../../components/organisms";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { newsAPI } from "../../api/api";

export const center = "flex justify-center items-center";
const categories = [
  "All",
  "business",
  "entertainment",
  "politics",
  "science",
  "sports",
  "technology",
  "world",
  "lifestyle",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const age = "20";

  // const { data: todayTopNews } = useInfiniteQuery(["todayTopNews"], ({ pageParam }) => newsAPI.todayTop(pageParam));
  // const { data: todayTopNewsByAge } = useInfiniteQuery(["todayTopNewsByAge"], ({ pageParam = 1 }) =>
  //   newsAPI.todayTopAndAge(age, pageParam)
  // );
  // const { data: topNewsByCategory } = useInfiniteQuery(["topNewsByCategory", selectedCategory], ({ pageParam = 1 }) =>
  //   newsAPI.category(selectedCategory, pageParam)
  // );
  // const { data: topNewsByCategoryAndAge } = useInfiniteQuery(
  //   ["topNewsByCategoryAndAge", selectedCategory],
  //   ({ pageParam = 1 }) => newsAPI.categoryAndAge(selectedCategory, age, pageParam)
  // );

  return (
    <main className="flex flex-col justify-center w-screen">
      <section>
        <div className={`${center} my-10`}>
          <Logo />
        </div>
        <div className={`${center} mb-10`}>
          {categories.map((v) => (
            <Button
              key={v}
              className={`${selectedCategory === v && "bg-teal-500"}`}
              onClick={() => setSelectedCategory(v)}
            >
              {v}
            </Button>
          ))}
        </div>
        <News text={`오늘의 ${selectedCategory} 인기 뉴스`} />
        <News text={`${age}대가 많이 본 ${selectedCategory} 뉴스`} />
      </section>
    </main>
  );
}
