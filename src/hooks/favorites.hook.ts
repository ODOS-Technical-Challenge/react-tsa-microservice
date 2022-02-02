import { useCallback, useEffect, useState } from "react";

export const useFavorites = (initial = "") => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorites = (airport: any) => {
    const favorites = localStorage.getItem("favorites");
    let list: any[] = JSON.parse(favorites || "[]");
    if (list.find((x: any) => x.name === airport.name)) {
      list = list.filter((x: any) => x.name !== airport.name);
    } else {
      list.unshift(airport);
    }
    localStorage.setItem("favorites", JSON.stringify(list));
    setFavorites(list);
  };

  const fetch = useCallback(async (q: string) => {
    const query = q.toLocaleLowerCase();
    const favorites = localStorage.getItem("favorites");
    let result = [];
    if (favorites) {
      result = JSON.parse(favorites || "[]");
      if (query) {
        result = result.filter((x: { [d: string]: string }) => {
          for (const prop in x) {
            switch (prop) {
              case "name":
              case "shortcode":
              case "city":
              case "state":
                if (x[prop].toLocaleLowerCase().includes(query)) {
                  return x;
                }
            }
          }
        });
      }
      setFavorites(result);
    }
  }, []);

  useEffect(() => {
    fetch(initial);
  }, [fetch]);

  return { favorites, fetch, addFavorites };
};
