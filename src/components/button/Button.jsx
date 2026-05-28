const Button = ({ text }) => {
  return (
    <button
      type='button'
      onClick={() => console.log(text)}
      style={{ backgroundColor: "black", color: "white" }}
    >
      {text}
    </button>
  );
};

export default Button;
