import React, { useState } from "react";

export default function Test() {
  const [file, setFile] = useState<File>();

  const imageUpLoadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="input-upload">프로필 이미지 : </label>
        <input
          name="input"
          id="input-upload"
          type="file"
          accept="image/*"
          className="mb-5"
          onChange={imageUpLoadHandler}
        />
      </div>
    </form>
  );
}
