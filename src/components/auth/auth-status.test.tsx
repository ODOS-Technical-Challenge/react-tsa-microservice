import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AuthStatus } from "./auth-status.component";
const mockedUsedNavigate = jest.fn();
let user: any = "test";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../../store/contexts", () => ({
  useAuth: () => ({
    signout: jest.fn((callback) => callback()),
    user,
  }),
}));

describe("Application Component: Auth State", () => {
  it("should handle rendering the component.", async () => {
    render(<AuthStatus />);
    const search = await screen.findByRole("button");
    expect(search).toBeInTheDocument();
  });

  it("click signout", async () => {
    render(<AuthStatus />);
    const signout = await screen.getByText("Sign out");
    fireEvent(
      signout,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(signout).toBeInTheDocument();
  });

  it("user is logged in", async () => {
    user = null;
    render(<AuthStatus />);
    const text = await screen.findByText("You are not logged in.");
    expect(text).toBeInTheDocument();
  });
});
