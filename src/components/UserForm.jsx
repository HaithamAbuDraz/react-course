import { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${user.firstName} ${user.lastName}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your first name'
          value={user.firstName}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, firstName: e.target.value };
            })
          }
        />
        <input
          type='text'
          placeholder='Enter your last name'
          value={user.lastName}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, lastName: e.target.value };
            })
          }
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
