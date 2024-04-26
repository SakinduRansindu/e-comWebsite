import React, { Component } from 'react'
import './ProductContainer.css'
import ProductItem from '../ProductItem/ProductItem'

const imgs = [
    'https://i.pinimg.com/564x/97/67/95/976795f595eb9505ec36dd9277289b8c.jpg',
    'https://i.pinimg.com/564x/f3/a9/5d/f3a95d3e3f30a31de37c15d47ddc11b1.jpg',
    'https://i.pinimg.com/564x/62/4e/25/624e25adaaf72f67a420431fe53ca373.jpg',
];
export default class ProductContainer extends Component {
  render() {
    return (
        <div className="container-sm dark2 mt-5 rounded">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-1 g-md-4 g-md-5">
                    {
                        Array.from({ length: 30 }).map((_, index) => (
                            <ProductItem key={index} id={index} Imgs={imgs}></ProductItem>
                        ))
                    }
                </div>
            </div>
        </div>
    )
  }
}
