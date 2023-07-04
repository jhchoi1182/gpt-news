import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignUp from ".";
import { rest } from "msw";
import { renderWithRouter } from "../../utils/test/testConfig";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

// test("이미지 테스트", async () => {
//   const { user } = renderWithRouter(<SignUp />);

//   const file = new File(["test image"], "test.png", { type: "image/png" });
//   const fileList = {
//     0: file,
//     length: 1,
//     item: () => file,
//   };

//   const inputElement = screen.getByLabelText("프로필 이미지", { exact: false }) as HTMLInputElement;
//   Object.defineProperty(inputElement, "files", {
//     value: fileList,
//   });

//   user.upload(inputElement, file);

//   expect(inputElement.files?.[0]).toEqual(file);
// });

test("이름 입력 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const nameInput = screen.getByLabelText("이름", { exact: false });
  expect(nameInput).toHaveValue("");
  const name = "테스트";
  await user.type(nameInput, name);
  expect(nameInput).toHaveValue(name);
});

test("카테고리 중복 선택 안 되고 최대 3개까지만 선택돼야 함", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const entertainment = screen.getByRole("button", { name: "entertainment" });
  const business = screen.getByRole("button", { name: "business" });
  const politics = screen.getByRole("button", { name: "politics" });
  const science = screen.getByRole("button", { name: "science" });

  screen.getByText("카테고리", { exact: false });
  await user.click(business);
  expect(business).toHaveClass(`bg-teal-500`);
  await user.click(entertainment);
  expect(entertainment).toHaveClass(`bg-teal-500`);
  await user.click(politics);
  expect(politics).toHaveClass(`bg-teal-500`);
  await user.click(science);
  expect(science).not.toHaveClass("bg-teal-500");

  await user.click(business);
  expect(business).not.toHaveClass("bg-teal-500");
  await user.click(science);
  expect(science).toHaveClass(`bg-teal-500`);
});

test("다크 모드 선택 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const lightCheckbox = screen.getByLabelText("light");
  const darkCheckbox = screen.getByLabelText("dark");

  screen.getByText("화면 색상", { exact: false });
  expect(darkCheckbox).not.toBeChecked();
  expect(lightCheckbox).not.toBeChecked();

  await user.click(darkCheckbox);
  expect(darkCheckbox).toBeChecked();
  expect(lightCheckbox).not.toBeChecked();

  await user.click(lightCheckbox);
  expect(darkCheckbox).not.toBeChecked();
  expect(lightCheckbox).toBeChecked();

  await user.click(darkCheckbox);
  expect(darkCheckbox).toBeChecked();
  expect(lightCheckbox).not.toBeChecked();
});

test("글자 크기 선택 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const smallCheckbox = screen.getByLabelText("small");
  const largeCheckbox = screen.getByLabelText("large");

  screen.getByText("글자 크기", { exact: false });
  expect(smallCheckbox).not.toBeChecked();
  expect(largeCheckbox).not.toBeChecked();

  await user.click(smallCheckbox);
  expect(smallCheckbox).toBeChecked();
  expect(largeCheckbox).not.toBeChecked();

  await user.click(largeCheckbox);
  expect(smallCheckbox).not.toBeChecked();
  expect(largeCheckbox).toBeChecked();

  await user.click(smallCheckbox);
  expect(smallCheckbox).toBeChecked();
  expect(largeCheckbox).not.toBeChecked();
});

test("성별 선택 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const femaleCheckbox = screen.getByLabelText("female");
  const maleCheckbox = screen.getByLabelText("male");

  screen.getByText("성별", { exact: false });
  expect(femaleCheckbox).not.toBeChecked();
  expect(maleCheckbox).not.toBeChecked();

  await user.click(maleCheckbox);
  expect(maleCheckbox).toBeChecked();
  expect(femaleCheckbox).not.toBeChecked();

  await user.click(femaleCheckbox);
  expect(maleCheckbox).not.toBeChecked();
  expect(femaleCheckbox).toBeChecked();

  await user.click(maleCheckbox);
  expect(maleCheckbox).toBeChecked();
  expect(femaleCheckbox).not.toBeChecked();
});

test("나이 선택 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const selectElement = screen.getByLabelText(/나이/);
  await user.selectOptions(selectElement, "10");

  const defaultOption = screen.getByRole("option", { name: "선택" }) as HTMLOptionElement;
  const selectedOption = screen.getByRole("option", { name: "10대" }) as HTMLOptionElement;

  expect(defaultOption.selected).toBeFalsy();
  expect(selectedOption.selected).toBeTruthy();
});

test("생년월일 선택 테스트", async () => {
  const { user } = renderWithRouter(<SignUp />);

  const datePicker = screen.getByLabelText(/생년월일/i) as HTMLInputElement;
  await user.type(datePicker, "1991-10-08");
  expect(datePicker.value).toBe("1991-10-08");
});

// test("하나라도 입력 안 돼 있을 시 제출되면 안 됨(근데 되고 있음...)", async () => {
//   const { user } = renderWithRouter(<SignUp />);

//   const submitButton = screen.getByRole("button", { name: "제출하기" });
//   await user.click(submitButton);

//   await waitFor(() => expect(window.location.pathname).toEqual("/"));
// });

// test("status 200일 때 /으로 이동", async () => {
//   rest.post(`${process.env.REACT_APP_MY_API}/profile/create_profile`, (req, res, ctx) => {
//     return res(ctx.json({ code: 200 }));
//   });
//   const { user } = renderWithRouter(<SignUp />);
//   // const user = userEvent.setup();
//   // render(
//   //   <BrowserRouter>
//   //     <SignUp />
//   //   </BrowserRouter>
//   // );
//   expect(window.location.pathname).toEqual("/");

//   const submitButton = screen.getByRole("button", { name: "제출하기" });

//   await user.click(submitButton);
//   screen.getByText("빈 항목을 작성해주세요.");
//   // fireEvent.click(submitButton);

//   const file = new File(["test image"], "test.png", { type: "image/png" });
//   const fileList = {
//     0: file,
//     length: 1,
//     item: () => file,
//   };

//   const inputElement = screen.getByLabelText("프로필 이미지", { exact: false }) as HTMLInputElement;
//   Object.defineProperty(inputElement, "files", {
//     value: fileList,
//   });

//   user.upload(inputElement, file);
//   await user.type(screen.getByLabelText("이름", { exact: false }), "테스트");
//   await user.click(screen.getByRole("button", { name: "entertainment" }));
//   await user.selectOptions(screen.getByLabelText(/나이/), "10");
//   await user.click(screen.getByLabelText("small"));
//   await user.click(screen.getByLabelText("dark"));
//   await user.click(screen.getByLabelText("male"));

//   await user.click(submitButton);
//   screen.getByText("빈 항목을 작성해주세요.");

//   await user.type(screen.getByLabelText(/생년월일/i), "1991-10-08");
//   await user.click(submitButton);

//   expect(window.location.pathname).toEqual("/");
// });
