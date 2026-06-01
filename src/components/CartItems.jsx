import CartItem from './CartItem';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

const CartItems = () => {
  const { cartItems } = useShoppingCartContext();
  return (
    <div>
      <h1>Cart {cartItems.length}</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
