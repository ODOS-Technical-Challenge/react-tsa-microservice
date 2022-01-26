import React, { createContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { authProvider, AuthStore } from "./AuthStore";
import { LoginPage } from "../components/auth/login.page";
import { AuthStatus } from "../components/auth/auth-status.component";
const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedLocation,
}));

jest.mock("./contexts", () => ({
  AuthContext: createContext({} as any),
  useAuth: () => authProvider,
}));

describe("Application Page: Auth Store", () => {
  it("should handle rendering the component.", () => {
    render(
      <AuthStore>
        <div></div>
      </AuthStore>
    );
  });

  it("calls signin", () => {
    render(
      <AuthStore>
        <LoginPage />
      </AuthStore>
    );
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

  it("click signout", () => {
    authProvider.user = "test";
    render(
      <AuthStore>
        <AuthStatus />
      </AuthStore>
    );
    const signout = screen.getByText("Sign out");
    fireEvent(
      signout,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(signout).toBeInTheDocument;
  });
});
