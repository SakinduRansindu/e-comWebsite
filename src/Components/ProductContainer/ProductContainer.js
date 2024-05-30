import React, { Component } from "react";
import "./ProductContainer.css";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductContainer extends Component {
  render() {
    return (
      <div className="container-sm py-1 my-3  mt-5 rounded">
        {this.props.ContainerTitle ? (
          <h1 className="text-center">{this.props.ContainerTitle}</h1>
        ) : (
          <></>
        )}
        <div className="container-fluid mt-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {this.props.products.map((product, index) => (
              <ProductItem
                key={index}
                id={index}
                Imgs={product.Imgs}
                title={product.title}
                price={product.Price}
                productUrl={product.productUrl}
                isDiscountApplied={product.isDiscountApplied}
                availableUnits={product.availableUnits}
                priceBeforeDiscount={product.priceBeforeDiscount}
                seller={product.seller}
              ></ProductItem>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
