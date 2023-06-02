import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useDispatch } from 'react-redux';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useEffect, useRef } from 'react';
import { setIsCartOpen } from '../../store/cart/cart.slice';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  };

  let clickRef = useRef();

    useEffect(() => {
      let handler = (e) =>{
        if(!clickRef.current.contains(e.target)){
          dispatch(setIsCartOpen(false));
        }
      }
      document.addEventListener('click', handler);
      return () => {
        document.removeEventListener('click', handler);
      };
    }, []);
  
  



  return (
    <CartDropdownContainer ref={clickRef} >
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem  key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
        
};
export default CartDropdown;
