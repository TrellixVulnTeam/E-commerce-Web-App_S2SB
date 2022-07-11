import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.scss";

import CartIcon from "../../components/Cart-icon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/Cart.context";
import { SingOutUser } from "../../utils/firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={SingOutUser}>
              Sing Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sing in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
