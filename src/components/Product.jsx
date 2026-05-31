import starIcon from '../assets/icons/star.png';

const Product = ({ product }) => {
  return (
    <li>
      <img src={product.img} alt={product.title} width='100px' height='100px' />
      <p>{product.title}</p>
      <p>
        Rate: {product.rate}
        {Array(product.rate)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={starIcon}
              alt='Star Icon'
              width='16px'
              height='16px'
            />
          ))}
      </p>
      <p>Price: {Number(product.price).toLocaleString()} ils</p>
      <p style={{ textDecoration: 'line-through' }}>
        Instead Of: {product.insteadOf} ils
      </p>
    </li>
  );
};

export default Product;
