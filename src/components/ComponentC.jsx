import { useCountContext } from '../context/CountContext';
import { initialState } from '../reducer';

const ComponentC = () => {
  const { dispatch } = useCountContext();

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          dispatch({ type: 'increment', payload: 3 });
        }}
      >
        Increment
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch({ type: 'decrement', payload: 3 });
        }}
      >
        Decrement
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch({ type: 'reset', payload: initialState });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentC;
