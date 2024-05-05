import React from 'react'
import Template from './Template/Template'
import PaymentForm from '../Components/PaymentForm/paymentForm'
import ProductDetails from '../Components/ProductDetails/productDetails'

export default function BuyItem() {
  return (
    <Template renderSlideBar={false}>
        <ProductDetails minimalData={true}></ProductDetails>
        <PaymentForm></PaymentForm>
    </Template>
  )
}
