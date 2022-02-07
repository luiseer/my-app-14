import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getProductsThunk } from '../redux/actions/main';

const Shop = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    const dispatch = useDispatch();

    const productsList = useSelector(state => state.shopList)

    console.log(productsList);

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    return (
        <div>
            <header>
                <h1>Shop</h1>
                <button className='bg-orange-100 rounded-md w-24 mt-2' onClick={logOut}>Log out</button>
            </header>
            {
                productsList.map(product => (
                    
                    <p key={product.id}>
                        <Link to={`/shop/${product.id}`}>
                            {product.name}
                        </Link>
                    </p>
                ))
            }

        </div>
    );
};

export default Shop;