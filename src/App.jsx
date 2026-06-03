import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  return (
    <>
      <div>
        <h1>Hello, React!</h1>
      </div>
    </>
  );
};

export default App;
