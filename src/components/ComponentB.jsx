import useCount from '../hooks/useCount';

const ComponentB = () => {
  const [count, increment, decrement, reset] = useCount();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type='button' onClick={increment}>
        Increment
      </button>
      <button type='button' onClick={decrement}>
        Decrement
      </button>
      <button type='button' onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ComponentB;
