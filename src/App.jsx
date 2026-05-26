import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const Form = () => {
  return (
    <form>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' placeholder='Enter your email' />
    </form>
  );
};

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;
