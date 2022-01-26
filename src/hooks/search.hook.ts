import { useState, useEffect, useCallback } from "react";
import { UserType } from "../types";

export const useSearch = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetch = useCallback(async (query: string) => {
    setLoading(true);
    console.log(query);
    // Mock call for now...
    const call = {
      data: [],
    };

    const { data } = call;

    setData(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch("");
  }, [fetch]);

  return { data, fetch, isLoading };
};
