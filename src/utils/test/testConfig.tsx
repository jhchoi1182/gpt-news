import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

export const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export const renderWithRouterMatch = (
  ui: JSX.Element,
  route: string | string[],
  path: string,
  children?: JSX.Element
) => {
  return (
    <MemoryRouter initialEntries={typeof route === "string" ? [route] : route}>
      {children && children}
      <Routes>
        <Route path={path} element={ui} />
      </Routes>
    </MemoryRouter>
  )
}
