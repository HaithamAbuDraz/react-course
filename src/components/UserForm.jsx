import useInput from '../hooks/useInput';
import Input from './Input';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  const formFilds = [
    { placeholder: 'Enter your first name', ...bindFirstName },
    { placeholder: 'Enter your last name', ...bindLastName },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFilds.map((forField, index) => (
          <Input key={index} {...forField} />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
