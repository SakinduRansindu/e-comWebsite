import React, { Component } from 'react'
import './ProductContainer.css'
import ProductItem from '../ProductItem/ProductItem'


export default class ProductContainer extends Component {
  render() {
        return (
            <div className="container-sm dark2 mt-5 rounded">
                {this.props.ContainerTitle?<h1 className="text-center">{this.props.ContainerTitle}</h1>:<></>}
                <div className="container-fluid mt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-1 g-md-4 g-md-5">
                        {

                            this.props.products.map((product, index) => (
                                <ProductItem key={index} id={index} Imgs={product.Imgs} description={product.description} title={product.title} productUrl={product.productUrl} seller={product.seller}></ProductItem>
                            ))

                        }
                    </div>
                </div>
            </div>
        )
  }
}
