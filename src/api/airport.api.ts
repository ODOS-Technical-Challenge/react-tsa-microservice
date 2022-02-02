import axios from "axios";
import { handleError } from "../utils";
import { BACKEND_URL } from "../utils";
import { stringify } from "querystring";

/**
 * Get Airports based on provided query
 * @returns
 */
export async function getAirportChecks(searchValue: string) {
  const url = `${BACKEND_URL}/airportSearch/?${stringify({ searchValue })}`;

  try {
    const { status, data } = await axios.get(url);

    return { data, status };
  } catch (error) {
    return handleError(error, []);
  }
}

/**
 * Fetch an airport by a specific id
 * @param id airport id
 * @returns airport data
 */
export async function getAirport(searchValue: string) {
  const url = `${BACKEND_URL}/airportSearch/?${stringify({ searchValue })}`;

  try {
    const { data, status } = await axios.get(url);

    return { data: data?.[0] || {}, status };
  } catch (error) {
    return handleError(error, {});
  }
}

export async function getAirportWaitTime(airportShortCode: string) {
  const url = `${BACKEND_URL}/airportHistoricWaitTimes/?${stringify({
    airportShortCode,
  })}`;

  try {
    const { data, status } = await axios.get(url);

    return { data, status };
  } catch (error) {
    return handleError(error, []);
  }
}
