import React, { useRef, useState, FormEvent } from "react";
import { NameInput, Categoties, SignupRadio, AgeSelect } from "../../components/molecules/signup";
import DatePicker from "../../components/atoms/ui/DatePicker";
import { profileAPI } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sex, setSex] = useState("");
  const [isDark, setIsDark] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");

  const imageUpLoadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  const categorySelectHandler = (category: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedCategory.includes(category)) return setSelectedCategory(selectedCategory.filter((v) => v !== category));
    if (selectedCategory.length < 3) return setSelectedCategory((prev) => [...prev, category]);
  };
  const ageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
  };
  const birthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };
  const genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSex(e.target.value);
  };
  const darkModeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.value);
  };
  const fontSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!nameRef.current) return;
    if (
      !file ||
      nameRef.current.value.length < 2 ||
      nameRef.current?.value === "" ||
      selectedCategory.length === 0 ||
      sex === "" ||
      isDark === "" ||
      fontSize === "" ||
      age === "" ||
      birthday === ""
    ) {
      return alert("빈 항목을 작성해주세요.");
    }
    const formData = new FormData();

    formData.append("file", file);
    formData.append("name", nameRef.current.value);
    formData.append("birthday", birthday);
    formData.append("sex", sex);
    formData.append("category", JSON.stringify(selectedCategory));
    formData.append("age", age);

    const { data } = await profileAPI.create(formData);
    if (data.code === 200) return navigate("/");
    else return alert("프로필 생성 실패");
  };

  return (
    <section className="flex justify-center items-center flex-col py-10">
      <h1 className="text-4xl font-bold mb-10" style={{ fontWeight: 700 }}>
        프로필 만들기
      </h1>
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
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
        <NameInput nameRef={nameRef} />
        <Categoties selectedCategory={selectedCategory} categorySelectHandler={categorySelectHandler} />
        <AgeSelect onChange={ageHandler} />
        <DatePicker onChange={birthDateHandler} />
        <SignupRadio type="화면 색상" state={isDark} onChange={darkModeHandler} />
        <SignupRadio type="글자 크기" state={fontSize} onChange={fontSizeHandler} />
        <SignupRadio type="성별" state={sex} onChange={genderHandler} />
        <button className="mt-10 font-bold border border-black py-2" type="submit">
          제출하기
        </button>
      </form>
    </section>
  );
}