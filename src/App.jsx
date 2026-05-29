import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("Haitham");
  const [lastName, setLastName] = useState("Mohammed");
  return (
    <>
      <h1>
        Hello, {firstName} {lastName}
      </h1>
      <button type='button' onClick={() => setFirstName("Bilal")}>
        Change FirstName
      </button>
      <button type='button' onClick={() => setLastName("Abu Draz")}>
        Change LastName
      </button>
    </>
  );
};

export default App;
