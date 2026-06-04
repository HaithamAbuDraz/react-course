import { memo } from 'react';

export default memo(function RenderName({ name }) {
  console.log('Rendering RenderName Component');
  return <h2>Name: {name}</h2>;
});
