import './App.css';

const App = () => {
  // fetch('https://jsonplaceholder.typicode.com/photos')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));

  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  getData();
  return <></>;
};

export default App;
