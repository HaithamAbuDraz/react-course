const Form = () => {
  return (
    <form>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter your email'
      />
    </form>
  );
};

export default Form;
