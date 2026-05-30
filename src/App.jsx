import './App.css';
import Top from './components/Top';

const App = () => {
  const username = 'Haitham';
  return (
    <>
      <h1>Hello, React</h1>
      <Top username={username} />
    </>
  );
};

export default App;
