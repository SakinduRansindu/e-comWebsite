import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { GetProductDetails } from '../../API/ProductsApi';
import Alert from '../Alert/Alert';


const ProductDetails = ({ pid, minimalData = false }) => {

  
  const [product, setProduct] = useState({});
  const [state, setstate] = useState('loading');
  const [imgs, setImgs] = useState([]);


  useEffect(() => {
    if(!minimalData && product.ProductImgs){
    let tmp = [];
    console.log(product);
    for (let i = 0; i < product.ProductImgs.length; i++) {
      tmp.push("/uploads/" + product.ProductImgs[i].imgUrl);
    }
    setImgs([...tmp]);
    setstate('loaded');
  }
  }, [product]);

  useEffect(() => {
      GetProductDetails(pid).then((res)=>{
          setProduct(res.data.product);
          console.log(res.data.product);
      }).catch((err)=>{
          console.error(err);
          setstate('error');
      });
  }, []);


  if (!minimalData && state === 'loaded') {
    return (
      <div className="product-details">
        <div className="product-image">
          <Carousel Imgs={imgs} style={{ maxHeight: '80vw' }} Cid=""></Carousel>
          {/* <img src={product.image} alt={product.name} /> */}
        </div>
        <div className="product-info">
          <h2>{product.DisplayName}</h2>
          <p>Price: <strike>Rs.{product.UnitPrice}</strike> Rs. {product.UnitPrice * (100 - product.Discount) / 100}</p>
          <p>Category: ${product.Category}</p>
          {
            product.AvailableUnits > 0 ? <p>Available Units: {product.AvailableUnits}</p> :
              <p>Out of Stock</p>
          }
          <div className="specifications">
            <h3>Description:</h3>
            <p>{product.Description}</p>
            <a href={`/payments/${pid}`} disabled={product.AvailableUnits>0} className="btn btn-success">Add to Cart</a>
          </div>
        </div>
      </div>
    );
  }
  else if(minimalData && state === 'loaded'){
    return (
      <div className="card">
        <div className="container m-1">
          <h4>{product.DisplayName}</h4>
          <p>Discount: {product.Discount}%</p>
          <p>Price: Rs. {product.UnitPrice * (100 - product.Discount) / 100}</p>
        </div>
      </div>
    );
  }
  else if (state === 'loading') {
    return (
      <Alert title={"Loading"} message={"Please wait while we load the product details"} type={"alert-info"}></Alert>
    );
  }
  };

  export default ProductDetails;
