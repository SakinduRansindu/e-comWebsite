import React from 'react'
import SellerOrderListItem from './SellerOrderListItem'
import CustomerOrderListItem from './CustomerOrderListItem'

export default function OrderListWrapper() {
  return (
    <div className="list-group">
        <SellerOrderListItem name='product name' state='state' date='3 days ago'/><SellerOrderListItem></SellerOrderListItem>
        <CustomerOrderListItem name='product name' state='state' date='3 days ago'/><CustomerOrderListItem></CustomerOrderListItem>
      </div>
  )
}
