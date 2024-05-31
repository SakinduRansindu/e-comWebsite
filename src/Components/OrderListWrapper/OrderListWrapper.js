import React from 'react'
import SellerOrderListItem from './SellerOrderListItem'
import CustomerOrderListItem from './CustomerOrderListItem'
import Alert from '../Alert/Alert'
import { AuthData } from '../AuthWrapper/AuthWrapper'


export default function OrderListWrapper({data}) {
  const {user} = AuthData();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false, 
      timeZone: 'UTC' 
    };
    return date.toLocaleString('en-US', options);
  };

  if(user.role === 'seller' && data.length > 0){
    return (
      <div className="list-group">
        {data.map((order)=>{
          return <SellerOrderListItem 
          orderId={order.PurchaseId}
          name={order.Product.DisplayName} 
          productId={order.Product.ProductId} 
          customerName={order.User.FirstName + ' ' + order.User.LastName}
          phone_No={order.User.Phone_No}
          PurchaseDateTime={formatDate(order.PurchaseDateTime)}
          state={order.state} 
          date={order.date}/>
        })}
      </div>
    )
  }
  else if(user.role === 'customer' && data.length > 0){
    return (
      <div className="list-group">
        {data.map((order)=>{
          return <CustomerOrderListItem name={order.Product.DisplayName} price={order.TotalPrice} units={order.Units} state={order.state} date={order.PurchaseDateTime}/>
        })}
      </div>
    )
  }
  else if(data.length === 0){
    return (
      <div className='my-5'>
        <Alert title={"Info:"} message={'No orders yet :)'} type={'alert-info'}></Alert>
        </div>
    )
  }
  else{
    return (
      <div className='my-5'>
        <Alert title={"Error:"} message={'user role not found :('}></Alert>
      </div>
    )
  }
}
