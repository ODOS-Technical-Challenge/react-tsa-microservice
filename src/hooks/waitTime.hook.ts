import { useCallback, useEffect, useState } from "react";

import { getAirportWaitTime } from "../api/airport.api";

export const useWaitTime = (code: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await getAirportWaitTime(code);
    setData(result.data);
    setLoading(false);
  }, [code]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
