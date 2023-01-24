import { useState } from "react";

export const useOwnStore = () => {
  const [count, setCount] = useState(0);

  const add = (value: number) => setCount((prev) => prev + value);

  const increaseCount = () => add(1);
  const decreaseCount = () => add(-1);

  return {
    count,
    setCount,
    increaseCount,
    decreaseCount,
  };
};
