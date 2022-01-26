import React from "react";
import { render, screen } from "@testing-library/react";

import { Props, VirtualCards } from "./card.component";

describe("Common Component: Table Component - Virtual Table", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: [{ name: "Jane" }],
      isLoading: true,
    };
  });

  it("should handle rendering loading component.", () => {
    const { container } = render(<VirtualCards {...props} />);

    expect(container.innerHTML).toContain("svg");
  });

  it("should handle rendering table data.", () => {
    render(<VirtualCards {...props} />);

    const data = screen.findByText("Jane");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a default value.", () => {
    props.data.push({});
    render(<VirtualCards {...props} />);

    const data = screen.findByText("default text");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a default value.", () => {
    props.data.push({});
    render(<VirtualCards {...props} />);

    const data = screen.findByText("-");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a custom rendering component.", () => {
    render(<VirtualCards {...props} />);

    const data = screen.findByText("Jane");
    expect(data).toBeInTheDocument;
  });
});
