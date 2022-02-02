import { renderHook } from "@testing-library/react-hooks";
import { useWaitTime } from "./waitTime.hook";
import { getAirportWaitTime } from "../api/airport.api";

jest.mock("../api/airport.api", () => ({
  getAirportWaitTime: jest.fn(),
}));

const mockedFunction = getAirportWaitTime as jest.MockedFunction<
  typeof getAirportWaitTime
>;

describe("Hook: Use Airport", () => {
  it("should handle being called.", () => {
    mockedFunction.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useWaitTime("IAD"));

    expect(result.current.isLoading).toBeTruthy();
  });

  it("should handle being called with query.", () => {
    mockedFunction.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useWaitTime("IAD"));

    expect(result.current.isLoading).toBeTruthy();
  });
});
