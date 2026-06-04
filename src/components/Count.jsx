const Count = ({ text, count }) => {
  console.log('Rendering:', text);
  return (
    <p>
      {text}: {count}
    </p>
  );
};

export default Count;
