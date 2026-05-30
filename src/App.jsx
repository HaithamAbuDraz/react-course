import { createContext } from 'react';
import './App.css';
import Top from './components/Top';

export const UsernameContext = createContext();

const App = () => {
  const username = 'Haitham';
  return (
    <>
      <UsernameContext.Provider value={username}>
        <h1>Hello, React</h1>
        <Top />
      </UsernameContext.Provider>
    </>
  );
};

export default App;
