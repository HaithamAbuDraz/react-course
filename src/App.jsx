import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
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
