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

    console.log(categories)
    console.log(productsList.map(product => product.images[0].url));

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
        <div className='bg-rosa-principal'>
            <div className='text-4xl text-center mt-2'>
                <h1>lorenza</h1>
            </div>
            <div className='flex justify-end'>
                <form onSubmit={filterProducts}>
                    <input
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className='border border-black'
                        type="text"
                    />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-search"
                            width="20" height="20" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#000000" fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
            </div>



            <div className='contenedor'>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-5 mt-5'>
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


                <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                    {
                        productsList.map(product => (

                            <div className='card-shop w-full h-full' key={product.id}>
                                <Link to={`/shop/${product.id}`}>
                                    <p>{product.name}</p>
                                    <img className='rounded-sm' src={product.images[0].url} alt="" />
                                    <p><span>Price </span>{product.price}</p>
                                </Link>
                            </div>
                        ))
                    }
                </main>




            </div>




        </div>
    );
};

export default Shop;