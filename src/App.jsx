import Form from "./components/Form";
import Header from "./components/header/Header";
import "./App.css";
import Products from "./components/products/Products";
import Button from "./components/button/Button";

const App = () => {
  const products = [
    { title: "Pizza", desc: "this is a pizza", price: 120, rate: 4 },
    { title: "Laptop", desc: "this is a laptop", price: 500, rate: 3 },
    { title: "Mobile", desc: "this is a mobile", price: 350, rate: 5 },
  ];
  // function sayHello() {
  //   console.log("Hello, World!");
  // }

  // const sayHello = () => {
  //   console.log("Hello, World!");
  // };

  const sayHello = (name) => console.log(`Hello, ${name}!`);

  return (
    <>
      {/* <Header />
      <Form />
      <Products products={products} /> */}
      <Button text='Click me' />
      <Button text='Click me again' />
    </>
  );
};

export default App;
