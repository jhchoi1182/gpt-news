import React from "react";

interface INameInput {
  nameRef: React.RefObject<HTMLInputElement>;
}

function NameInput({ nameRef }: INameInput) {
  return (
    <div className="mb-5">
      <label htmlFor="이름">이름 : </label>
      <input ref={nameRef} id="이름" type="text" className="ml-8 border border-black" />
    </div>
  );
}

export default React.memo(NameInput);
