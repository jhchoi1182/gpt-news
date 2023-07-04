import React from "react";

interface IAgeSelect {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function AgeSelect({ onChange }: IAgeSelect) {
  return (
    <div className="mb-5">
      <label htmlFor="age">나이</label>
      <select className="ml-12 border border-black" id="age" onChange={onChange}>
        <option value="">선택</option>
        <option value="10">10대</option>
        <option value="20">20대</option>
        <option value="30">30대</option>
        <option value="40">40대</option>
        <option value="50">50대</option>
        <option value="60">60대</option>
        <option value="70">70대 이상</option>
      </select>
    </div>
  );
}

export default React.memo(AgeSelect);
