import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        return <Card key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
