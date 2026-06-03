import { useEffect, useRef, useState } from 'react';

const App = () => {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <div>
        <h1>Timer: {timer}</h1>
        <button
          type='button'
          onClick={() => clearInterval(intervalRef.current)}
        >
          Stop Timer
        </button>
      </div>
    </>
  );
};

export default App;
