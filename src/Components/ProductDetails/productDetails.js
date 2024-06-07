import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { GetProductDetails } from '../../API/ProductsApi';
import Alert from '../Alert/Alert';
import './productDetails.css'; // Import the CSS file

const ProductDetails = ({ pid, minimalData = false }) => {
  const [product, setProduct] = useState({});
  const [state, setState] = useState('loading');
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    GetProductDetails(pid)
      .then((res) => {
        setProduct(res.data.product);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setState('error');
      });
  }, [pid]);

  useEffect(() => {
    if (!minimalData && product?.ProductImgs) {
      const tmpImgs = product.ProductImgs.map((img) => "/uploads/" + img.imgUrl);
      setImgs(tmpImgs);
      setState('loaded');
    } else if (minimalData && product?.DisplayName) {
      setState('loaded');
    }
  }, [product, minimalData]);

  if (!minimalData && state === 'loaded') {
    return (
      <div className="product-details">
        <div className="product-image">
          <Carousel Imgs={imgs} style={{ maxHeight: '80vw' }} Cid=""></Carousel>
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.DisplayName}</h2>
          <p className="product-price">Price: <strike>Rs.{product.UnitPrice}</strike> Rs. {product.UnitPrice * (100 - product.Discount) / 100}</p>
          <p className="product-category">Category: {product.Category}</p>
          {product.AvailableUnits > 0 ? <p className="product-units">Available Units: {product.AvailableUnits}</p> : <p className="product-out-of-stock">Out of Stock</p>}
          <div className="specifications">
            <h3 className="product-description-title">Description:</h3>
            <p className="product-description">{product.Description}</p>
            <a href={`/payments/${product.ProductId}`}>
              <button disabled={product.AvailableUnits === 0} className="btn btn-success add-to-cart">
              Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (minimalData && state === 'loaded') {
    return (
      <div className="card w-50 mx-auto bg-success">
        <div className="container m-1">
          <h4>{product.DisplayName}</h4>
          <p>Discount: {product.Discount}%</p>
          <p>Price: Rs. {product.UnitPrice * (100 - product.Discount) / 100}</p>
        </div>
      </div>
    );
  } else if (state === 'loading') {
    return <Alert title={"Loading"} message={"Please wait while we load the product details"} type={"alert-info"} />;
  } else if (state === 'error') {
    return <Alert title={"Error"} message={"There was an error loading the product details"} type={"alert-danger"} />;
  }

  return null;
};

export default ProductDetails;
