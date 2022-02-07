import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { getConfig } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetailThunk } from '../redux/actions/main';


const Products = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productDetail)

    console.log(product);

    useEffect(() => {
        dispatch(getProductsDetailThunk(id))
    }, [dispatch, id])

    return (
        <div>
            <h1>Product Detail</h1>
            <p>{product.name}</p>
        </div>
    );
};

export default Products;
