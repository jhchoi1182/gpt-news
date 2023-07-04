import React from "react";

interface IBirthDateInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function BirthDateInput({ onChange }: IBirthDateInput) {
  return (
    <div className="mb-5">
      <label htmlFor="birthDate">생년월일 : </label>
      <input type="date" id="birthDate" className="border border-black" onChange={onChange} />
    </div>
  );
}

export default React.memo(BirthDateInput);
