import React from "react";
import { NewsItem } from "../molecules/news";
import { center } from "../../pages/home";

interface INews {
  text: string;
}

export default function News({ text }: INews) {
  return (
    <section>
      <div className={`${center} mb-10`}>
        <span className="font-bold text-lg mr-5">{text}</span>
        <span>{`더보기 ${"\u276F"}`}</span>
      </div>
      <div className={`${center} flex-col`}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </section>
  );
}
