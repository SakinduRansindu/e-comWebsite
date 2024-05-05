import React from 'react'
import Template from './Template/Template'
import {calculateDiscount} from '../API/ProductsApi'
import OrderListWrapper from '../Components/OrderListWrapper/OrderListWrapper'

export default function OrderState() {
  console.log(calculateDiscount(100,10,"2024-05-05T00:00:00.000Z"));
  return (
    <Template renderSlideBar={false}>
      <OrderListWrapper></OrderListWrapper>
    </Template>
  )
}
