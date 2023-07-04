import React from "react";

export default function NewsItem() {
  return (
    <div className="flex w-1/3 h-28 mb-5 border-2 border-black p-2 cursor-pointer">
      <div className="w-24 h-full bg-slate-500" />
      <div className="flex flex-col px-5">
        <span>기사 내용</span>
      </div>
      <div className="mt-auto ml-auto">뉴스: 출처</div>
    </div>
  );
}
