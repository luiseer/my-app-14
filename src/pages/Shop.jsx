import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCategoryThunk, filterProductsThunk, getCategoriesThunk, getProductsThunk } from '../redux/actions/main';


const Shop = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.shopList)
    const categories = useSelector(state => state.categories)

    // console.log(categories)
    // console.log(productsList);

    const filterCategory = id => dispatch(filterCategoryThunk(id))

    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch(getCategoriesThunk())
    }, [dispatch])

    const filterProducts = e => {
        e.preventDefault()
        dispatch(filterProductsThunk(search))
    }

    return (
        <div className='bg-rosa-principal contenedor'>
            <div className='flex justify-end m-5'>
                <h3 className='mr-2'>Find Category</h3>
                <form onSubmit={filterProducts}>
                    <input
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className='border border-black'
                        type="text"
                    />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </form>
            </div>

            <div>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-9 mt-9 '>
                    {
                        categories.map(categorie => (
                            <button
                                className='border-black border-l-2'
                                onClick={() => filterCategory(categorie.id)}
                                key={categorie.id}>
                                <p>{categorie.name}</p>
                            </button>
                        ))
                    }
                </section>

                    <h1  className='text-center text-4xl mb-10 mt-10'>Store</h1>

                <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                    {
                        productsList.map(product => (

                            <Link to={`/shop/${product.id}`}>
                                <div  key={product.id}>
                                    <p>{product.name}</p>
                                    <img className='rounded-sm' src={product.images[0].url} alt="" />
                                    <p><span>Price </span>{product.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </main>




            </div>




        </div>
    );
};

export default Shop;