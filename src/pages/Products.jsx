import { useParams } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getConfig } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryThunk, getProductsDetailThunk } from '../redux/actions/main';


const Products = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const productsList = useSelector(state => state.shopList)

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

    return (
        <div>
            <h1>Product Detail</h1>
            <p>{productDetail.name}</p>
            <p>{productDetail.category?.name}</p>
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

        </div>

    );
};

export default Products;
