import Form from "./components/Form";
import Header from "./components/header/Header";
import "./App.css";

const App = () => {
  const message = "Hello React";
  console.log("From console");
  return (
    <>
      <h1>{message}</h1>
      <Header />
      <Form />
    </>
  );
};

export default App;
