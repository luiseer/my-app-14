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

  // console.log(selectCart.map(product => product.product.images?.[3].url));

  console.log(selectCart.map(product => product.product.description));

  const deleteItems = id => {
    dispatch(deleteItemThunk(id))
  }

  return (
    <div>
      <h1 className='text-4xl text-center mt-5'>Cart</h1>
      <main className='flex flex-col gap-4 p-2 card-cart contenedor-cart'>
        {
          selectCart.map(cart => (
            <section className='grid grid-cols-1 md:grid-cols-2 ' key={cart.id}>
              <div>
                <Link to={`/shop/${cart.product?.id}`}>
                  <img className='w-10/12 h-70' src={cart.product.images?.[1].url} alt="" />
                </Link>
              </div>
              <div>
                <div className='text-center p-4 m-5 flex flex-col gap-4'>
                  <div>
                    <p>{cart.product?.name}</p>
                  </div>
                  <div>
                    <p>{cart.product.price}</p>
                  </div>
                  <div>
                    <p>{cart.product.description}</p>
                  </div>
                </div>
                <div className='grid grid-cols-3 mt-5'>
                  <div>
                    <img className='img-detail' src="src/img/calidad.svg" alt="" />
                    <p className='text-center'>quality</p>
                  </div>
                  <div>
                    <img className='img-detail' src="src/img/envios.svg" alt="" />
                    <p className='text-center'>shipments</p>
                  </div>
                  <div>
                    <img className='img-detail' src="src/img/seguridad.svg" alt="" />
                    <p className='text-center'>security</p>
                  </div>
                </div>

                <div className='text-center'>
                  <button
                    onClick={() => deleteItems(cart.id)}
                    className='btn-primary w-3/4 mt-5'
                  >Delete
                  </button>
                </div>
              </div>
            </section>
          ))
        }
      </main>
    </div>
  );
};

export default Cart;
