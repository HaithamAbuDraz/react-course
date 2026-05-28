import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, World!</h1>
      <div>Count: {count}</div>
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type='button' onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
      <button type='button' onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
};

export default App;
