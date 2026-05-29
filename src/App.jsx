import './App.css';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    firstName: 'Haitham',
    lastName: 'Mohammed',
  });
  return (
    <>
      <input
        type='text'
        placeholder='Enter your first name'
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        type='text'
        placeholder='Enter your last name'
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <h1>
        Hello, {user.firstName} {user.lastName}
      </h1>
    </>
  );
};

export default App;
