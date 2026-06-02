import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { useCountContext } from './context/CountContext';

const App = () => {
  const { count } = useCountContext();
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};

export default App;
