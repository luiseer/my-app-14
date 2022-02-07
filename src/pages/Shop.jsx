import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { filterCategorieThunk, getCategoriesThunk, getProductsThunk } from '../redux/actions/main';


const Shop = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    const dispatch = useDispatch();

    const productsList = useSelector(state => state.shopList)
    const categories = useSelector(state => state.categories)

    console.log(categories);
    console.log(productsList);

    const filterCategorie = id  => dispatch(filterCategorieThunk(id))

    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch(getCategoriesThunk())
    }, [dispatch])

    return (
        <div>
            <header>
                <h1>Shop</h1>
                <button className='bg-orange-100 rounded-md w-24 mt-2' onClick={logOut}>Log out</button>
            </header>

            <nav className='flex justify-around mb-5'>
                {
                    categories.map(categorie => (
                        <button
                            onClick={() => filterCategorie(categorie.id)} 
                            key={categorie.id}>
                                {categorie.name}
                        </button>
                    ))
                }
            </nav>


            <main>
                {
                    productsList.map(product => (

                        <p key={product.id}>
                            <Link to={`/shop/${product.id}`}>
                                {product.name}
                            </Link>
                        </p>
                    ))
                }
            </main>


        </div>
    );
};

export default Shop;