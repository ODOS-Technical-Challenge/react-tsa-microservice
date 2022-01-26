import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "./login.page";
const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();
const user: any = "test";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedLocation,
}));

jest.mock("../../store/contexts", () => ({
  useAuth: () => ({
    signin: jest.fn((name: string, callback) => callback()),
    signout: jest.fn((callback) => callback()),
    user,
  }),
}));

describe("Application Page: Login Page", () => {
  it("should handle rendering the component.", () => {
    render(<LoginPage />);
    const search = screen.findByText("Username");
    expect(search).toBeInTheDocument;
  });

  it("triggers submit", () => {
    render(<LoginPage />);
    const login = screen.getByText("Login");
    fireEvent(
      login,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(login).toBeInTheDocument;
  });
});
