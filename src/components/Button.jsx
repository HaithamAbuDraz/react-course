const Button = ({ children, onClick }) => {
  console.log('Rendering:', children);
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
