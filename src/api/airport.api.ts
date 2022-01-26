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
