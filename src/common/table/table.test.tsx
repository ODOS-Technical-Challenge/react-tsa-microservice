import React from "react";
import { render, screen } from "@testing-library/react";

import { Props, VirtualTable } from "./table.component";

describe("Common Component: Table Component - Virtual Table", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: [{ name: "Jane" }],
      isLoading: true,
    };
  });

  it("should handle rendering loading component.", () => {
    const { container } = render(<VirtualTable {...props} />);

    expect(container.innerHTML).toContain("svg");
  });

  it("should handle rendering table data.", () => {
    render(<VirtualTable {...props} />);

    const data = screen.findByText("Jane");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a default value.", () => {
    props.data.push({});
    render(<VirtualTable {...props} />);

    const data = screen.findByText("default text");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a default value.", () => {
    props.data.push({});
    render(<VirtualTable {...props} />);

    const data = screen.findByText("-");
    expect(data).toBeInTheDocument;
  });

  it("should handle rendering table data with a custom rendering component.", () => {
    render(<VirtualTable {...props} />);

    const data = screen.findByText("Jane");
    expect(data).toBeInTheDocument;
  });
});
