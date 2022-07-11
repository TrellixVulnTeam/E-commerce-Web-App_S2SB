import { useContext } from "react";

import { ReactComponent as ShoingIcone } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/Cart.context";

import "./CartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggel = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggel} className='cart-icon-container'>
      <ShoingIcone className='shopping-icon' />
      <span className='item-count'>{count}</span>
    </div>
  );
};

export default CartIcon;
