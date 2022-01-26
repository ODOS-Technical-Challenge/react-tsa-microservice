import axios from "axios";
import { handleError } from "../utils";
import { BACKEND_URL } from "../utils";
import { stringify } from "querystring";

/**
 * Get Airports based on provided query
 * @returns
 */
export async function getAirportChecks(query: string) {
  const url = `${BACKEND_URL}/airports/?${stringify({ query })}`;

  try {
    const { data, status } = await axios.get(url);

    return { data, status };
  } catch (error) {
    return handleError(error, []);
  }
}
