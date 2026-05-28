const Button = ({ onClick, children }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      style={{ backgroundColor: "black", color: "white" }}
    >
      {children}
    </button>
  );
};

export default Button;
