import { useContext } from 'react';
import { UsernameContext } from '../App';

const Last = () => {
  const username = useContext(UsernameContext);
  return (
    <div>
      <h1>My username is {username}</h1>
    </div>
  );
};

export default Last;
