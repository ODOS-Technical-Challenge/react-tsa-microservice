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

  it("should handle user event: login-in", async () => {
    render(
      <AuthStore>
        <LoginPage />
      </AuthStore>
    );
    const button = await screen.getByText("Login");
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(button).toBeInTheDocument();
  });

  it("should handle user event: logout.", async () => {
    authProvider.user = "test";
    render(
      <AuthStore>
        <AuthStatus />
      </AuthStore>
    );
    const button = await screen.getByText("Sign out");
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(button).toBeInTheDocument();
  });
});
