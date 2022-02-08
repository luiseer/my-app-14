import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemThunk, getCartThunk } from '../redux/actions/main';

const Cart = () => {

const dispatch = useDispatch()

const selectCart = useSelector(state => state.cart)

useEffect(() => dispatch(getCartThunk()), [dispatch])

console.log(selectCart.map(product => product.id));

const deleteItems = id => {
  dispatch(deleteItemThunk(id))
}

  return (
    <div>
        <h1>Cart</h1>
        <main>
          {
            selectCart.map(cart => (
              <section key={cart.id}>
                <Link to={`/shop/${cart.product?.id}`}>
                  {cart.product?.name}
                </Link>
                <button
                  onClick={() => deleteItems(cart.id)} 
                  className='bg-black text-white ml-5 mt-2'
                  >Delete
                  </button>
              </section>
            ))
          }
        </main>
    </div>
    );
};

export default Cart;
