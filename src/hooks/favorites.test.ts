import { renderHook } from "@testing-library/react-hooks";
import { useFavorites } from "./favorites.hook";

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useFavorites("test"));
    expect(result.current.favorites).toBeDefined();
  });

  it("should handle being called with query.", () => {
    const favs = JSON.stringify([{ name: "test" }]);
    // works:
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockImplementation()
      .mockReturnValue(favs);
    const { result } = renderHook(() => useFavorites());

    result.current.addFavorites({ name: "test" });

    expect(result.current.favorites).toBeDefined();

    result.current.addFavorites({ name: "me" });

    expect(result.current.favorites).toBeDefined();

    result.current.addFavorites({ name: "me" });

    expect(result.current.favorites).toBeDefined();

    result.current.fetch("test");

    expect(result.current.favorites).toBeDefined();
  });
});
