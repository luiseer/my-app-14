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


    // console.log(productDetail?.images[0]?.url);
    console.log(productsList);


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

            <div className='grid grid-cols-1 md:grid-cols-2 mb-5 contenedor'>
                <div className='m-5 p-5 w-11/12 h-full'>
                    <img src={productDetail.images?.[1].url} alt="images-1" />
                    {/* <img src={productDetail.images[2].url} alt="" /> */}
                </div>
                <section className='mt-5 p-5'>
                    <div className='mb-5'>
                        <p className='text-1xl mt-6'>{productDetail.name}</p>
                        <p className='text-1xl mt-4'> <span>$ </span>{productDetail.price}</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Amet quam, expedita eligendi impedit aliquid nihil, doloribus pariatur accusantium obcaecati eum sed quisquam 
                            quos ipsum vel voluptatum officia facere eius reiciendis!</p>
                    </div>
                    <div className='flex justify-between border-2 w-1/5'>
                        <div>
                            <button onClick={() => setQuantity(quantity - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-minus"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50" fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <p>{quantity}</p>
                        </div>
                        <div>
                            <button onClick={() => setQuantity(quantity + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-plus"
                                    width="20" height="20" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#2c3e50" fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                  
                        <div className='flex justify-center items-center border h-12 w-1/2 m-auto mt-5 ease-in duration-150 hover:bg-rosa-secundario hover:text-white'>
                            <button className=''  onClick={addCart}>Add to cart <span>$ {productDetail.price}</span></button>
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
                    <div className='mt-5'>
                        <h2>Description</h2>
                        <p>{productDetail.description}</p>
                    </div>
                </section>
            </div>


            <section>
                <h2 className='text-2xl text-center uppercase mb-10'>you may also like</h2>
                <div className='grid grid-cols-4 gap-2 p-4'>
                    {
                        productsList.map(product => (

                            <div key={product.id}>
                                <Link to={`/shop/${product.id}`}>
                                    <p>{product.name}</p>
                                    <img src={product.images[1].url} alt="" />
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </section>

            <div>

            </div>

        </div>

    );
};

export default Products;
