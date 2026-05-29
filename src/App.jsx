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
  console.log(fetchedData);

  return (
  <>
  {JSON.stringify(fetchedData)}
  </>
  );
};

export default App;
