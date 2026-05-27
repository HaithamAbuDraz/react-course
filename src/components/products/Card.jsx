const Card = ({ product }) => {
  return (
    <div>
      <h1>Title: {product.title}</h1>
      <p>Desc: {product.desc}</p>
      <span style={{ display: "block" }}>Price: {product.price}</span>
      <span>Rate: {product.rate}</span>
    </div>
  );
};

export default Card;
