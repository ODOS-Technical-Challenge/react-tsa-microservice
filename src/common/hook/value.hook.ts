import { useState, useEffect } from "react";

export function useValue<T>(value: T): [T, (value: T) => void] {
  const [internal, setInternal] = useState<T>(value);

  useEffect(() => {
    if (value !== internal) {
      setInternal(value);
    }
  }, [value]);

  return [internal, setInternal];
}
