const CartItem = ({ cartItem }) => {
  return (
    <li>
      <img
        src={cartItem.img}
        alt={cartItem.title}
        width='100px'
        height='100px'
      />
      <p>{cartItem.title}</p>
      <p>Price: {Number(cartItem.price).toLocaleString()} ils</p>
      <p style={{ textDecoration: 'line-through' }}>
        Instead Of: {cartItem.insteadOf} ils
      </p>
    </li>
  );
};

export default CartItem;
