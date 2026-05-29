import "./App.css";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    firstName: "Haitham",
    lastName: "Mohammed",
  });
  return (
    <>
      <h1>
        Hello, {user.firstName} {user.lastName}
      </h1>
      <button
        type='button'
        onClick={() =>
          setUser((prev) => {
            return { ...prev, lastName: "Abu Draz" };
          })
        }
      >
        Change user
      </button>
    </>
  );
};

export default App;
