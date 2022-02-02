import React from "react";
import { render, screen } from "@testing-library/react";

import { Props, VirtualTable } from "./table.component";
import { TdTag } from "..";

describe("Common Component: Table Component - Virtual Table", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      menu: [{ title: "Name", path: "name" }],
      data: [{ name: "Jane" }],
      isLoading: true,
    };
  });

  it("should handle rendering loading component.", () => {
    const { container } = render(<VirtualTable {...props} />);

    expect(container.innerHTML).toContain("svg");
  });

  it("should handle rendering table data.", async () => {
    render(<VirtualTable {...props} />);

    const data = await screen.findByText("Jane");
    expect(data).toBeInTheDocument();
  });

  it("should handle rendering table data with a default value.", async () => {
    props.menu[0].default = "default text";
    props.data.push({});
    render(<VirtualTable {...props} />);

    const data = await screen.findByText("default text");
    expect(data).toBeInTheDocument();
  });

  it("should handle rendering table data with a default value.", async () => {
    props.data.push({});
    render(<VirtualTable {...props} />);

    const data = await screen.findByText("-");
    expect(data).toBeInTheDocument();
  });

  it("should handle rendering table data with a custom rendering component.", async () => {
    props.menu[0].render = TdTag;
    render(<VirtualTable {...props} />);

    const data = await screen.findByText("Jane");
    expect(data).toBeInTheDocument();
  });
});
