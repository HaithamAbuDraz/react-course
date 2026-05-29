import './App.css';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <form>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default App;
