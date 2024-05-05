import React from 'react'
import SellerOrderListItem from './SellerOrderListItem'
import CustomerOrderListItem from './CustomerOrderListItem'
import Alert from '../Alert/Alert'
import { AuthData } from '../AuthWrapper/AuthWrapper'

export default function OrderListWrapper({data}) {
  const {user} = AuthData();

  if(user.role === 'seller' && data.length > 0){
    return (
      <div className="list-group">
        {data.map((order)=>{
          return <SellerOrderListItem name={order.productName} state={order.state} date={order.date}/>
        })}
      </div>
    )
  }
  else if(user.role === 'customer' && data.length > 0){
    return (
      <div className="list-group">
        {data.map((order)=>{
          return <CustomerOrderListItem name={order.productName} state={order.state} date={order.date}/>
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
