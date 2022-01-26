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
      data: [
        {
          username: "jsmith",
          firstName: "John",
          lastName: "Smith",
          role: "Admin",
        },
        {
          username: "jdoe",
          firstName: "Jane",
          lastName: "Doe",
          role: "Reviewer",
        },
      ],
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
