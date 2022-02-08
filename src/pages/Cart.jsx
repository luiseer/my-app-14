import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../redux/actions/main';

const Cart = () => {

const dispatch = useDispatch()

const selectCart = useSelector(state => state.cart)

useEffect(() => dispatch(getCartThunk()), [dispatch])

console.log(selectCart.map(product => product.product));

  return (
    <div>
        <h1>Cart</h1>
        <main>
          {
            selectCart.map(cart => (
              <p key={cart.product?.id}>
                <Link to={`/shop/${cart.product?.id}`}>
                  {cart.product?.name}
                </Link>
              </p>
            ))
          }
        </main>
    </div>
    );
};

export default Cart;
