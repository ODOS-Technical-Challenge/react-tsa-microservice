import { AxiosError } from "axios";

/**
 * Handle informing the user of an error, along with returning the correct result
 * @param error the axios error
 * @param data the default data
 * @returns status, error message, and data
 */
export function handleError<T = undefined>(error: unknown, data: T) {
  const response = (error as AxiosError).response;
  const status = response?.status;

  return { status: status || 400, error: response?.data, data };
}
