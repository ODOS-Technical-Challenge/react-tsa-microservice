import { getAirportChecks, getAirportWaitTime } from "./airport.api";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Rest Api: Airport Data", () => {
  it("should handle normal api call.", async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: [] });
    const { data, status } = await getAirportChecks("");

    expect(data).toBeDefined();
    expect(status).toEqual(200);
  });

  it("should handle invalid api call.", async () => {
    mockedAxios.get.mockRejectedValue({ status: 400, data: "error" });
    const { data, status } = await getAirportChecks("");

    expect(data).toEqual([]);
    expect(status).toEqual(400);
  });
});

describe("Rest Api: Airport Wait Time Data", () => {
  it("should handle normal api call.", async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: [] });
    const { data, status } = await getAirportWaitTime("");

    expect(data).toEqual([]);
    expect(status).toEqual(200);
  });

  it("should handle invalid api call.", async () => {
    mockedAxios.get.mockRejectedValue({ status: 400, data: "error" });
    const { data, status } = await getAirportWaitTime("");

    expect(data).toEqual([]);
    expect(status).toEqual(400);
  });
});
