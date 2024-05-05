import React from 'react'
import OrderStateEditor from '../OrderStateEditor/OrderStateEditor'

export default function SellerOrderListItem({name, orderId, productId, customerName, phone_No, state, PurchaseDateTime}) {
  
  
  
  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start my-2 mx-auto dark2">
    <div className="d-flex w-80 justify-content-between">
      <div className='d-flex justify-content-between w-75'> 
      <p className="m-1 px-4 py-2 mr-5">Order ID {orderId}</p>
        <small className='m-1 p-1 rounded'>{PurchaseDateTime}</small>

        <h5 className="m-1 px-4 py-2 mr-5">{name}</h5>
        <p className="m-1 px-4 py-2 mr-5">{customerName}</p>
        <p className="m-1 px-4 py-2 mr-5">{phone_No}</p>
        <p className="m-1 px-4 py-2 rounded border success">{state}</p>
        <OrderStateEditor initialState={state} orderId={orderId}   />
      </div>
    </div>
  </a>
  )
}
