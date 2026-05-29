import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        setFetchedData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <ul>
      {fetchedData.slice(0, 9).map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.url} alt={item.title} width='100px' height='100px' />
        </li>
      ))}
    </ul>
  );
};

export default App;
