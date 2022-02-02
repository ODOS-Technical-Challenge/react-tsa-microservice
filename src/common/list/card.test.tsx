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

  it("should handle rendering table data.", async () => {
    render(<VirtualCards {...props} />);

    const data = await screen.findByText("Jane");
    expect(data).toBeInTheDocument();
  });

  // it("should handle rendering table data with a default value.", async () => {
  //   props.data.push({});
  //   render(<VirtualCards {...props} />);

  //   const data = await screen.findByText("default text");
  //   expect(data).toBeInTheDocument();
  // });

  // it("should handle rendering table data with a default value.", async () => {
  //   props.data.push({});
  //   render(<VirtualCards {...props} />);

  //   const data = await screen.findByText("-");
  //   expect(data).toBeInTheDocument();
  // });

  it("should handle rendering table data with a custom rendering component.", async () => {
    render(<VirtualCards {...props} />);

    const data = await screen.findByText("Jane");
    expect(data).toBeInTheDocument();
  });
});
