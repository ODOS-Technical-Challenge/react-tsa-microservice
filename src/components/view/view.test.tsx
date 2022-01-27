import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { ViewPage } from "./view.page";

describe("Application Page: View Search Results Page", () => {
  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <ViewPage />
      </BrowserRouter>
    );

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should handle user interaction: 'back' action.", async () => {
    render(
      <BrowserRouter>
        <ViewPage />
      </BrowserRouter>
    );

    const button = await screen.findByRole("button");
    userEvent.click(button);
  });
});
