import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { FavoritesPage } from "./favorites.page";

describe("Application Page: Search Page", () => {
  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <FavoritesPage />
      </BrowserRouter>
    );
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <FavoritesPage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    userEvent.type(search, "query");
  });
});
