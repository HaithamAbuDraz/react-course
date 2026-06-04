import { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const calculateSum = (nums) => {
    console.log('Calculating sum...');
    return nums.reduce((acc, curr) => acc + curr, 0);
  };

  const sum = useMemo(() => calculateSum(numbers), [numbers]);

  return (
    <>
      <div>
        <h1>Hello React!</h1>
        <p>Sum of numbers {sum}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Counter ({count})
        </button>
        <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
          Add Number to Array
        </button>
      </div>
    </>
  );
};

export default App;
