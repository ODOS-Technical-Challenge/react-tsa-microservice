import { renderHook } from "@testing-library/react-hooks";
import { useSelected } from "./selected.hook";

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useSelected());

    expect(result.current.selected).toBeDefined();
  });

  it("should handle being called with query.", () => {
    const { result } = renderHook(() => useSelected());

    result.current.addSelected({ name: "test" });

    expect(result.current.selected).toBeDefined();

    result.current.addSelected({ name: "test" });

    expect(result.current.selected).toBeDefined();
  });
});
