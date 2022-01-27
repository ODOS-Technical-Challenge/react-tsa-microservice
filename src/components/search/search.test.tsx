import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { SearchPage } from "./search.page";

describe("Application Page: Search Page", () => {
  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    expect(search).toBeInTheDocument();
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    userEvent.type(search, "query");

    const button = await screen.findByRole("button");
    userEvent.click(button);
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    userEvent.type(search, "query");

    const button = await screen.findByRole("button");
    userEvent.click(button);
  });
});
