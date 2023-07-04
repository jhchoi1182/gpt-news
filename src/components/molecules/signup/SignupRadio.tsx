import React from "react";
import { RadioInput } from "../../atoms/input";

type Type = "성별" | "화면 색상" | "글자 크기";
type TypeObj = {
  [key in Type]: {
    leftRadio: string;
    rightRadio: string;
  };
};

interface IGenderRadio {
  type: Type;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SignupRadio({ type, state, onChange }: IGenderRadio) {
  const types: TypeObj = {
    성별: {
      leftRadio: "male",
      rightRadio: "female",
    },
    "화면 색상": {
      leftRadio: "dark",
      rightRadio: "light",
    },
    "글자 크기": {
      leftRadio: "small",
      rightRadio: "large",
    },
  };
  const { leftRadio, rightRadio } = types[type];

  return (
    <div className="mb-5">
      <span>{`${type} : `}</span>
      <label htmlFor={leftRadio} className="m-2">
        <RadioInput id={leftRadio} state={state} onChange={onChange} />
        {leftRadio}
      </label>
      <label htmlFor={rightRadio} className="ml-2">
        <RadioInput id={rightRadio} state={state} onChange={onChange} />
        {rightRadio}
      </label>
    </div>
  );
}

export default React.memo(SignupRadio);
