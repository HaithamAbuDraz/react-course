import Form from "./components/Form";
import Header from "./components/header/Header";
import "./App.css";
import Products from "./components/products/Products";

const App = () => {
  const products = [
    { title: "Pizza", desc: "this is a pizza", price: 120, rate: 4 },
    { title: "Laptop", desc: "this is a laptop", price: 500, rate: 3 },
    { title: "Mobile", desc: "this is a mobile", price: 350, rate: 5 },
  ];
  return (
    <>
      <Header />
      <Form />
      <Products products={products} />
    </>
  );
};

export default App;
