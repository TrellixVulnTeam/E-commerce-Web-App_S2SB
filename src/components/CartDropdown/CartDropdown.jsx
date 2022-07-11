import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Btn>GO TO CHECKOUT</Btn>
    </div>
  );
};

export default CartDropdown;
