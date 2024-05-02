import React from 'react'
import ProductContainer from '../Components/ProductContainer/ProductContainer'
import Template from './Template/Template'

export default function BrowseProducts() {

  const imgs = [
    'https://i.pinimg.com/564x/97/67/95/976795f595eb9505ec36dd9277289b8c.jpg',
    'https://i.pinimg.com/564x/f3/a9/5d/f3a95d3e3f30a31de37c15d47ddc11b1.jpg',
    'https://i.pinimg.com/564x/62/4e/25/624e25adaaf72f67a420431fe53ca373.jpg',
];

const products = [
  {
    title: "T-shirt",
    description: "description of the product",
    Imgs: imgs,
    productUrl: "about:blank",
    seller: "mora",
  },
  {
    title: "T-shirt 2",
    description: "description of the product",
    Imgs: imgs,
    productUrl: "about:blank",
    seller: "mora",
  },

];

  return (
    <Template renderSlideBar={true}>
        <ProductContainer ContainerTitle='Title' products={products}></ProductContainer>
    </Template>
  )
}
