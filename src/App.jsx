import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data);
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
