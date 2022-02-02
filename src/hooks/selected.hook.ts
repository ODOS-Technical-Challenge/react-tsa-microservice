import { useState } from "react";

export const useSelected = () => {
  const [selected, setSelected] = useState<any[]>([]);

  const addSelected = (airport: any) => {
    const list = selected.concat();
    if (selected.find((x: any) => x.name === airport.name)) {
      // list = list.filter((x: any) => x.name !== airport.name);
    } else {
      list.unshift(airport);
    }
    setSelected(list);
  };

  return { selected, addSelected };
};
