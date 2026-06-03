import useInput from '../hooks/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter your first name' {...bindFirstName} />
        <input placeholder='Enter your last name' {...bindLastName} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
