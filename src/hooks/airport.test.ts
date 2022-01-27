import { renderHook } from "@testing-library/react-hooks";
import { useAirport } from "./airport.hook";
// import { getAirport } from "../api/airport.api";

// jest.mock("../api/airport.api", () => ({
//   getAirportChecks: jest.fn(),
// }));

// const mockedFunction = getAirport as jest.MockedFunction<typeof getAirport>;

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useAirport("id"));

    expect(result.current.isLoading).toBeTruthy();
  });

  it("should handle being called with query.", () => {
    // mockedFunction.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useAirport("Dulles"));

    expect(result.current.isLoading).toBeTruthy();
  });
});
