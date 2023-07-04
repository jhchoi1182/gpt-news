import React from "react";
import { Button } from "../../atoms/button";

const categories = ["business", "entertainment", "politics", "science", "sports", "technology", "world", "lifestyle"];

interface ICategoties {
  selectedCategory: string[];
  categorySelectHandler: (category: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Categoties({ selectedCategory, categorySelectHandler }: ICategoties) {
  return (
    <div className="flex mb-5">
      <span className="mt-1">카테고리 : </span>
      <div className="flex w-80 flex-wrap">
        {categories.map((category, i) => {
          const isSelected = selectedCategory.includes(category);
          return (
            <Button
              key={i}
              className={`mb-1 ${isSelected && "bg-teal-500"}`}
              onClick={(e) => categorySelectHandler(category, e)}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Categoties);
