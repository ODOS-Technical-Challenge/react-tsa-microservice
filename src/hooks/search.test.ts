import { renderHook } from "@testing-library/react-hooks";
import { useSearch } from "./search.hook";

describe("Hook: Use Search", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.isLoading).toBeFalsy();
  });
});
