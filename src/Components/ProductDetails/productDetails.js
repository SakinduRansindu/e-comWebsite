
import React, { useState } from 'react';

const product = {
  id: 1,
  name: "Awesome Product",
  description: "This is an awesome product that you will love!",
  price: 99.99,
  imageUrl: "https://via.placeholder.com/300"
};

function Product() {

  const [cart, setCart] = useState([]);

  function addToCart(){
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div style={styles.container}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button style={styles.button}>Add to cart</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};



export default Product;
