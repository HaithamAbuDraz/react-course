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
    </>
  );
};

export default App;
