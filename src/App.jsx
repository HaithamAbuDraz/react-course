import { useState } from 'react';
import './App.css';
import RenderName from './components/RenderName';

const App = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <RenderName name={name} />
        <h2>Address: {address}</h2>
      </div>
    </>
  );
};

export default App;
