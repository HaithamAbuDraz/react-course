import { useEffect, useRef, useState } from 'react';

const App = () => {
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
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
        <input ref={inputRef} type='email' placeholder='Enter your email' />
      </div>
    </>
  );
};

export default App;
