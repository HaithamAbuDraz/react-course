import Product from './Product';

const Products = ({ products, setCartItems }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
