import { useCallback, useEffect, useState } from "react";

import { getAirport } from "../api/airport.api";

export const useAirport = (id: string) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await getAirport(id);
    setData(result.data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
