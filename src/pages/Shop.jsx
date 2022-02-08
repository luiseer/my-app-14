import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { filterCategoryThunk, filterProductsThunk, getCategoriesThunk, getProductsThunk } from '../redux/actions/main';


const Shop = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.shopList)
    const categories = useSelector(state => state.categories)

    console.log(categories);
    console.log(productsList);

    const filterCategory = id  => dispatch(filterCategoryThunk(id))

    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch(getCategoriesThunk())
    }, [dispatch])

    const filterProducts = e =>{
        e.preventDefault()
        dispatch(filterProductsThunk(search))
    }

    return (
        <div>
            <header>
                <h1>Shop</h1>
                
            </header>

            <section>
                {
                    categories.map(categorie => (
                        <button
                            onClick={() => filterCategory(categorie.id)} 
                            key={categorie.id}>
                                {categorie.name}
                        </button>
                    ))
                }
            </section>

            <form onSubmit={filterProducts}>
                <button>Search</button>
                <input
                    onChange={e => setSearch(e.target.value)}
                    value={search} 
                    className= 'border border-black' 
                    type="text" 
                />
            </form>

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