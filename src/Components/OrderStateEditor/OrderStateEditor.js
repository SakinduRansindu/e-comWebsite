import React, { useState } from 'react';
import { SetSellerOrderStatus } from '../../API/ProductsApi';
import Button from '../../button.js';

const OrderStateEditor = ({ initialState, orderId }) => {
  const [orderState, setOrderState] = useState(initialState);
  const [showSelect, setShowSelect] = useState(false);

  const handleSetStateClick = () => {
    setShowSelect(true); 
  };

  const handleStateChange = (event) => {
    setOrderState(event.target.value);
  };

  const handleUpdateState = () => {
    SetSellerOrderStatus(orderId, orderState)
      .then((res) => {
        console.log(res);
        // Trigger a browser reload
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {!showSelect ? ( 
        <button className='btn btn-primary'  onClick={handleSetStateClick}>Set State</button>
      ) : (
        <div>
          <select value={orderState} onChange={handleStateChange}>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className='btn btn-primary' label="Save" onClick={handleUpdateState}>Save</button>
        </div>
      )}
    </div>
  );
};

export default OrderStateEditor;
