import './App.css';
import Middle from './components/Middle';

const App = () => {
  const username = 'Haitham';
  return (
    <>
      <h1>Hello, Reacts</h1>
      <Middle username={username} />
    </>
  );
};

export default App;
