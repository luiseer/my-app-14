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

console.log(selectCart.map(product => product.product.images[3].url));

const deleteItems = id => {
  dispatch(deleteItemThunk(id))
}

  return (
    <div>
        <h1 className='text-4xl text-center mt-5'>Cart</h1>
        <main className='grid grid-cols-5'>
          {
            selectCart.map(cart => (
              <section  key={cart.id}>
                <Link to={`/shop/${cart.product?.id}`}>
                  <p>{cart.product?.name}</p>
                  <p>{cart.product.price}</p>
                  <img src={cart.product.images[3].url} alt="" />
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
