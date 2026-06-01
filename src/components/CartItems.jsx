import CartItem from './CartItem';

const CartItems = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart {cartItems.length}</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
