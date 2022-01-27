import { useCallback, useEffect, useState } from "react";

import { getAirportChecks } from "../api/airport.api";

export const useAirports = (initial = "") => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async (query: string) => {
    if (query) {
      setLoading(true);
      const result = await getAirportChecks(query);
      setData(result.data);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch(initial);
  }, [fetch]);

  return { data, isLoading, fetch };
};
