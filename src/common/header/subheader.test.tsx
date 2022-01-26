import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./header.component";

describe("Common Component: Header Component", () => {
  it("should handle rendering children.", () => {
    render(<Header />);

    const child = screen.findByRole("textbox");

    expect(child).toBeInTheDocument;
  });
});
