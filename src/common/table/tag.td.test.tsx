import React from "react";
import { render, screen } from "@testing-library/react";

import { TdTag } from "./tag.td";

describe("Common Component: Table Component - Tag td", () => {
  it("should handle component.", () => {
    render(<TdTag value="-" />);

    const value = screen.findByText("-");

    expect(value).toBeInTheDocument;
  });

  it("should handle component.", () => {
    render(<TdTag value="jdoe" />);

    const value = screen.findByText("jdoe");

    expect(value).toBeInTheDocument;
  });
});
