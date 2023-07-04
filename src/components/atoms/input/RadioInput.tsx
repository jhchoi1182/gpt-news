import React from "react";

interface IRadioInput {
  id: string;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInput({ id, state, onChange }: IRadioInput) {
  return <input className="mr-1" type="radio" id={id} value={id} checked={id === state} onChange={onChange} />;
}
