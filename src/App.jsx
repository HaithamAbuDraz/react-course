import { useCallback, useState } from 'react';
import './App.css';
import Count from './components/Count';
import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(8000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <div>
        <Title />
        <Count text='Age' count={age} />
        <Count text='Salary' count={salary} />
        <Button onClick={incrementAge}>Increment Age</Button>
        <Button onClick={incrementSalary}>Increment Salary</Button>
      </div>
    </>
  );
};

export default App;
