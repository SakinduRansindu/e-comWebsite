import React from 'react'
import { useParams } from 'react-router-dom'
import Template from './Template/Template'
import ProductDetails from '../Components/ProductDetails/productDetails';

export default function ViewProduct() {
    
  const params = useParams();

    console.log(params);
  return (
    <Template renderSlideBar={false}>
      <ProductDetails pid={params.pid}></ProductDetails>
    </Template>
  )
}
