import { renderHook } from "@testing-library/react-hooks";
import { useAirport } from "./airport.hook";

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useAirport());

    expect(result.current.isLoading).toBeFalsy();
  });
});
