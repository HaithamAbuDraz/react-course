import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        if (res.status === 200) {
          setFetchedData(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setErrorMessage('Something went wrong');
        }
        console.log(data);
      } catch (err) {
        setErrorMessage(JSON.stringify(err));
        setIsLoading(false);
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && errorMessage && <h1>{errorMessage}</h1>}
      {isLoading === false && fetchedData && (
        <ul>
          {fetchedData.slice(0, 9).map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img
                src={item.url}
                alt={item.title}
                width='100px'
                height='100px'
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
