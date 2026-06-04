const Button = ({ children, onClick }) => {
  console.log('Rendering Button:', children);
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
