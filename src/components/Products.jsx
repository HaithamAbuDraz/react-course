import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;