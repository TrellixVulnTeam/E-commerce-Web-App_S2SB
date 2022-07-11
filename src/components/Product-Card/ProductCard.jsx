import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import Btn from "../Btn/Btn";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const onClickHandler = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Btn btnType='invert' onClick={onClickHandler}>
        Add to card
      </Btn>
    </div>
  );
};

export default ProductCard;
