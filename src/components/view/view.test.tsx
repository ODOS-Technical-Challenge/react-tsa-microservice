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

    const buttons = await screen.findAllByRole("button");

    for (const button of buttons) {
      expect(button).toBeInTheDocument();
    }
  });

  it("should handle user interaction: 'back' action.", async () => {
    render(
      <BrowserRouter>
        <ViewPage />
      </BrowserRouter>
    );

    const buttons = await screen.findAllByRole("button");

    for (const button of buttons) {
      userEvent.click(button);
    }
  });
});
