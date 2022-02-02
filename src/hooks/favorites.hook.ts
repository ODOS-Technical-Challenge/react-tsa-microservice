import { useCallback, useEffect, useState } from "react";

export const useFavorites = (initial = "") => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async (query: string) => {
    setLoading(true);
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const d = JSON.parse(favorites);
      if (query) {
        (d || []).filter((x: { [d: string]: string }) => {
          for (const prop in x) {
            switch (prop) {
              case "name":
              case "shortcode":
              case "city":
              case "state":
                if (x[prop].includes(query)) {
                  return x;
                }
            }
          }
        });
      }
      setData(d);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch(initial);
  }, [fetch]);

  return { data, isLoading, fetch };
};
