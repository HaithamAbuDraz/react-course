import { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      console.log('Hello, React!');
    }
  }, []);

  return (
    <>
      <h1>Hello, Reacts</h1>
    </>
  );
};

export default App;
