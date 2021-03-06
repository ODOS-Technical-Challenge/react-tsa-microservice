import { renderHook } from "@testing-library/react-hooks";
import { useAirports } from "./airports.hook";
import { getAirportChecks } from "../api/airport.api";

jest.mock("../api/airport.api", () => ({
  getAirportChecks: jest.fn(),
}));

const mockedFunction = getAirportChecks as jest.MockedFunction<
  typeof getAirportChecks
>;

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    const { result } = renderHook(() => useAirports());

    expect(result.current.isLoading).toBeFalsy();
  });

  it("should handle being called with query.", () => {
    mockedFunction.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useAirports("Dulles"));

    expect(result.current.isLoading).toBeTruthy();
  });
});
