import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartThunk,
  filterCategoryThunk,
  getProductsDetailThunk,
} from "../redux/actions/main";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const productsList = useSelector((state) => state.shopList);

  const [quantity, setQuantity] = useState(0);

  const handleUpQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDownQuantity = () => {
    setQuantity(quantity - 1);
  };

  console.log(quantity);

  // console.log(productDetail?.images[0]?.url);

  useEffect(() => {
    dispatch(getProductsDetailThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetail.category) {
      dispatch(filterCategoryThunk(productDetail.category.id));
    }
  }, [dispatch, productDetail]);

  if (quantity <= 1 && quantity < 30) {
    console.log("contidad minima 1 y cantidad maxima 30");
  }

    const addCart = () => {
      const addCart = {
        product: id,
        quantity: quantity,
      };
      dispatch(addCartThunk(addCart));
    };
  

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 contenedor">
        <div className="m-5 p-5 w-11/12 h-9/12">
          <img
            className="rounded-md"
            src={productDetail.images?.[1].url}
            alt="images-1"
          />
        </div>
        <section className="mt-5 p-5">
          <div className="mb-5">
            <p className="text-1xl mt-6">{productDetail.name}</p>
            <p className="text-1xl mt-4">
              {" "}
              <span>$ </span>
              {productDetail.price}
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quam, expedita eligendi impedit aliquid nihil, doloribus pariatur
              accusantium obcaecati eum sed quisquam quos ipsum vel voluptatum
              officia facere eius reiciendis!
            </p>
          </div>
          <div className="flex justify-between border-2 w-1/5">
            <div>
              <button onClick={handleUpQuantity}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div>
                {
                    quantity ? <p>{quantity}</p> : <p>Cantidad invalida</p>
                }
            </div>
            <div>
              <button onClick={handleDownQuantity}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center h-12 w-1/2 m-auto mt-5">
            <button className="btn-primary w-full" onClick={addCart}>
              Add to cart <span>$ {productDetail.price}</span>
            </button>
          </div>

          <div className="grid grid-cols-3 mt-5">
            <div>
              <img className="img-detail" src="src/img/calidad.svg" alt="" />
              <p className="text-center">quality</p>
            </div>
            <div>
              <img className="img-detail" src="src/img/envios.svg" alt="" />
              <p className="text-center">shipments</p>
            </div>
            <div>
              <img className="img-detail" src="src/img/seguridad.svg" alt="" />
              <p className="text-center">security</p>
            </div>
          </div>

          <div className="mt-5">
            <h2>Description</h2>
            <p>{productDetail.description}</p>
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-2xl text-center uppercase mb-10">
          you may also like
        </h2>
        <div className="grid grid-cols-4 gap-2 p-4">
          {productsList.map((product) => (
            <div key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <div className="card-also text-center">
                  <div className="text-1xl">
                    <p>{product.name}</p>
                  </div>
                  <div>
                    <img
                      className="rounded-xl"
                      src={product.images?.[1].url}
                      alt="img-jew-people"
                    />
                    <p>
                      {" "}
                      <span>$ </span>
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default Products;
