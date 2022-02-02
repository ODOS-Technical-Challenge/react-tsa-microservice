import axios from "axios";
import { handleError } from "../utils";
import * as airports from "./airport.json";
// import { BACKEND_URL } from "../utils";
// import { stringify } from "querystring";

/**
 * Get Airports based on provided query
 * @returns
 */
export async function getAirportChecks(query: string) {
  // const url = `${BACKEND_URL}/airports/?${stringify({ query })}`;
  console.log(query);

  const url = "https://my.api.mockaroo.com/airport.json?key=7d32a3f0";

  try {
    const { status } = await axios.get(url);

    return { data: (airports as any).default, status };
  } catch (error) {
    return handleError(error, []);
  }
}

/**
 * Fetch an airport by a specific id
 * @param id airport id
 * @returns airport data
 */
export async function getAirport(id: string) {
  // const url = `${BACKEND_URL}/airport/${id}`;

  const data = {
    airport: "Dulles",
    city: "Sterling",
    state: "VA",
    times: "20min",
  };

  const status = 200;

  try {
    // const { data, status } = await axios.get(url);

    return { data, status };
  } catch (error) {
    return handleError(error, {});
  }
}
