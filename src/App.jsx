import { useReducer } from 'react';
import './App.css';

const initialCountOneState = 0;
const initialCountTwoState = 2;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [countOne, dispatchCountOne] = useReducer(
    reducer,
    initialCountOneState,
  );
  const [countTwo, dispatchCountTwo] = useReducer(
    reducer,
    initialCountTwoState,
  );
  return (
    <>
      <div>
        <h1>Count One: {countOne}</h1>
        <button
          type='button'
          onClick={() => dispatchCountOne({ type: 'increment', payload: 1 })}
        >
          Increment
        </button>
        <button
          type='button'
          onClick={() => dispatchCountOne({ type: 'decrement', payload: 1 })}
        >
          Decrement
        </button>
        <button
          type='button'
          onClick={() =>
            dispatchCountOne({ type: 'reset', payload: initialCountOneState })
          }
        >
          Reset
        </button>
      </div>
      <div>
        <h1>Count Two: {countTwo}</h1>
        <button
          type='button'
          onClick={() => dispatchCountTwo({ type: 'increment', payload: 1 })}
        >
          Increment
        </button>
        <button
          type='button'
          onClick={() => dispatchCountTwo({ type: 'decrement', payload: 1 })}
        >
          Decrement
        </button>
        <button
          type='button'
          onClick={() =>
            dispatchCountTwo({ type: 'reset', payload: initialCountTwoState })
          }
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
