import './App.css';

const App = () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return <></>;
};

export default App;
