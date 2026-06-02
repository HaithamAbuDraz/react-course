import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action === 'increment') {
    return state + 1;
  } else if (action === 'decrement') {
    return state - 1;
  } else if (action === 'reset') {
    return 0;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button type='button' onClick={() => dispatch('increment')}>
        Increment
      </button>
      <button type='button' onClick={() => dispatch('decrement')}>
        Decrement
      </button>
      <button type='button' onClick={() => dispatch('reset')}>
        Reset
      </button>
    </>
  );
};

export default App;
