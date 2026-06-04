import { memo } from 'react';

const Title = memo(() => {
  console.log('Rendering Title');
  return <h1>Hello React</h1>;
});

export default Title;
