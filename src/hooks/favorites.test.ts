import { renderHook } from "@testing-library/react-hooks";
import { useFavorites } from "./favorites.hook";

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.favorites).toBeDefined();
  });

  it("should handle being called with query.", () => {
    const { result } = renderHook(() => useFavorites("Dulles"));

    expect(result.current.favorites).toBeDefined();
  });
});
