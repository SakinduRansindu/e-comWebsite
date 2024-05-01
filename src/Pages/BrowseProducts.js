import React from 'react'
import ProductContainer from '../Components/ProductContainer/ProductContainer'
import Template from './Template/Template'

export default function BrowseProducts() {
  return (
    <Template renderSlideBar={true}>
        <ProductContainer></ProductContainer>
    </Template>
  )
}
