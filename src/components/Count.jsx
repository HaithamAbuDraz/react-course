import { memo } from 'react';

const Count = memo(({ text, count }) => {
  console.log('Rendering:', text);
  return (
    <p>
      {text}: {count}
    </p>
  );
});

export default Count;
