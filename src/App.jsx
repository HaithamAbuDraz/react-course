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
    </>
  );
};

export default App;
