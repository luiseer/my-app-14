import { useParams } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getConfig } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { addCartThunk, filterCategoryThunk, getProductsDetailThunk } from '../redux/actions/main';
import { useState } from 'react';


const Products = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const productsList = useSelector(state => state.shopList)

    const [quantity, setQuantity] = useState(1)


    console.log(productsList);

    console.log(productDetail.category?.id);

    useEffect(() => {
        dispatch(getProductsDetailThunk(id))
    }, [dispatch, id])

    useEffect(() => {
        if (productDetail.category) {
            dispatch(filterCategoryThunk(productDetail.category.id))
        }
    }, [dispatch, productDetail])

    const addCart = () => {
        const addCart = {
            product: id,
            quantity: quantity
        }
        dispatch(addCartThunk(addCart))
    }

    return (
        <div>
            <div>
                <h1>Product Detail</h1>
                <p>{productDetail.name}</p>
                <p>{productDetail.category?.name}</p>
            </div>

            <section className=''>
                <h2>Buy</h2>
                <div>
                    <div>
                        <button onClick={() => setQuantity(quantity - 1)}>Quit</button>
                    </div>
                    <div>
                        <p>{quantity}</p>
                    </div>
                    <div>
                        <button onClick={() => setQuantity(quantity + 1)}>Add</button>
                    </div>
                    <div>
                        <button onClick={addCart}>Add to cart</button>
                    </div>
                </div>
            </section>

            <section>
                <h2 className='text-3xl text-center'>Related Products</h2>
                {
                    productsList.map(product => (

                        <p key={product.id}>
                            <Link to={`/shop/${product.id}`}>
                                {product.name}
                            </Link>
                        </p>
                    ))
                }
            </section>

            <div>

            </div>

        </div>

    );
};

export default Products;
