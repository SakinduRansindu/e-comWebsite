import React from 'react'
import Template from './Template/Template'
import PaymentForm from '../Components/PaymentForm/paymentForm'
import ProductDetails from '../Components/ProductDetails/productDetails'
import { useParams } from 'react-router-dom'


export default function BuyItem() {
    const params = useParams();
  return (
    <Template renderSlideBar={false}>
        <ProductDetails minimalData={true} pid={params.pid}></ProductDetails>
        <PaymentForm></PaymentForm>
    </Template>
  )
}
