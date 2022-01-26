import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPage } from "./search.page";
import { BrowserRouter } from "react-router-dom";

describe("Application Page: Search Page", () => {
  it("should handle rendering the component.", () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search = screen.findByRole("textbox");
    expect(search).toBeInTheDocument;
  });
});
