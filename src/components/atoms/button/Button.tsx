import React from "react";

type Size = "small" | "big";

interface IButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  className?: string;
}

export default function Button({ children, onClick, size = "small", className }: IButton) {
  const sizes: { [key in Size]: string } = {
    small: "py-1",
    big: "py-3.5",
  };

  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center border border-black mx-1 py-1 px-3 rounded-full text-black font-bold ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
