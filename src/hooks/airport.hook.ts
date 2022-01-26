import { useCallback, useEffect, useState } from "react";

import { getAirportChecks } from "../api/airport.api";

export const useAirport = (initial = "") => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetch = useCallback(async (query: string) => {
    setLoading(true);
    const result = await getAirportChecks(query);
    setData(result.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch(initial);
  }, [fetch]);

  return { data, isLoading, fetch };
};
