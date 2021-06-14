import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const productList = useSelector( state => state.productList);
  const { loading, error, products} = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    // const fecthData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get('/api/products');
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fecthData();    INI tidak perlu lagi karena sudah menggunakan redux

    dispatch(listProducts());
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
           <Product key={product._id} product={product}></Product>
           ))}
         </div>
       )}
     </div>
   );
 }