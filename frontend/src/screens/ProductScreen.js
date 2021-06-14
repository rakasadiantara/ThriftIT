import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    // const product = data.products.find(x => x._id === props.match.params.id); // show product menggunakan static file
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector( state => state.productDetails);
    const { loading, error, product } = productDetails; // ini dimanakan constructor object = productDetails.product
    // if(!product){
    //     return <div> Product Ini Tidak Ada!</div>
    // }

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    return (
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div>
            <Link to="/">Kembali</Link>
            <div className="row top">
                <div className="col-2">
                    <img class="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price : Rp {product.price}
                        </li>
                        <li> Description :
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Harga </div>
                                    <div className="price"> Rp {product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         )}
       </div>


    );
}
