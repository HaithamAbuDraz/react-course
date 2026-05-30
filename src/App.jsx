import { useEffect } from 'react';
import './App.css';

const App = () => {
  const listener = () => {
    console.log('Hello');
  };
  useEffect(() => {
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  });

  return (
    <>
      <h1>Hello, Reacts</h1>
    </>
  );
};

export default App;
