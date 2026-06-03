import { useState } from "react";

const initialState = 0;

const useCount = () => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialState);

  return [count, increment, decrement, reset];
}

export default useCount