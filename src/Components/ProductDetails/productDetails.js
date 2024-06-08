import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { GetProductDetails } from "../../API/ProductsApi";
import Alert from "../Alert/Alert";
import "./productDetails.css"; // Import the CSS file


const ProductDetails = ({ pid, minimalData = false }) => {
  const [product, setProduct] = useState({});
  const [state, setState] = useState("loading");
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    GetProductDetails(pid)
      .then((res) => {
        setProduct(res.data.product);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setState("error");
      });
  }, [pid]);

  useEffect(() => {
    if (!minimalData && product?.ProductImgs) {
      const tmpImgs = product.ProductImgs.map((img) => `${process.env.REACT_APP_BASE_URL}/uploads/` + img.imgUrl);
      setImgs(tmpImgs);
      setState("loaded");
    } else if (minimalData && product?.DisplayName) {
      setState("loaded");
    }
  }, [product, minimalData]);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      padding: '20px',
      maxWidth: '1200px',
    },
    productDetails: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      marginTop: '20px',
      width: '100%',
      border: '2px solid #ddd',
      borderRadius: '10px', 
      padding: '20px', 
    },
    productImage: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    productInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    productName: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'white',
    },
    productPrice: {
      fontSize: '1.5rem',
      color: '#FF0000',
    },
    strike: {
      textDecoration: 'line-through',
      color: '#666',
      fontSize: '1rem',
    },
    productCategory: {
      fontSize: '1.2rem',
      color: '#ddd',
    },
    productUnits: {
      fontSize: '1.2rem',
      color: '#ddd',
    },
    productOutOfStock: {
      fontSize: '1.2rem',
      color: 'red',
    },
    specifications: {
      marginTop: '20px',
    },
    productDescriptionTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#ddd',
    },
    productDescription: {
      fontSize: '1.2rem',
      color: '#666',
    },
    button: {
      padding: '8px 18px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
    },
    buttonDisabled: {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      marginTop: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa',
      width: '50%',
      margin: '0 auto',
    },
  };

  if (!minimalData && state === 'loaded') {
    return (
      <div style={styles.container}>
        <div style={styles.productDetails}>
          <div style={styles.productImage}>
            <Carousel Imgs={imgs} style={{ maxHeight: '80vw' }} Cid=""></Carousel>
          </div>
          <div style={styles.productInfo}>
            <h2 style={styles.productName}>{product.DisplayName}</h2>
            <p style={styles.productPrice}>
              Price: Rs.{product.UnitPrice * (100 - product.Discount) / 100} <span style={styles.strike}>Rs.{product.UnitPrice}</span>
            </p>
            <p style={styles.productCategory}>Category: {product.Category}</p>
            {product.AvailableUnits > 0 ? (
              <p style={styles.productUnits}>Available Units: {product.AvailableUnits}</p>
            ) : (
              <p style={styles.productOutOfStock}>Out of Stock</p>
            )}
            <div style={styles.specifications}>
              <h3 style={styles.productDescriptionTitle}>Description:</h3>
              <p style={styles.productDescription}>{product.Description}</p>
              <a href={`/payments/${product.ProductId}`}>
                <button
                  disabled={product.AvailableUnits === 0}
                  style={product.AvailableUnits === 0 ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                >
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (minimalData && state === "loaded") {
    return (
      <div style={styles.card}>
        <div className="container m-1">
          <h4>{product.DisplayName}</h4>
          <p>Discount: {product.Discount}%</p>
          <p>
            Price: Rs. {(product.UnitPrice * (100 - product.Discount)) / 100}
          </p>
        </div>
      </div>
    );
  } else if (state === "loading") {
    return (
      <Alert
        title={"Loading"}
        message={"Please wait while we load the product details"}
        type={"alert-info"}
      />
    );
  } else if (state === "error") {
    return (
      <Alert
        title={"Error"}
        message={"There was an error loading the product details"}
        type={"alert-danger"}
      />
    );
  }

  return null;
};

export default ProductDetails;
