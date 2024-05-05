import React from "react";
import Carousel from "../Carousel/Carousel";
import Button from "../../button.js";

export default function ProductItem({ ...props }) {
  return (
    <div className="container-fluid col">
      <div className="p-3 m-4 mx-sm-4 mx-md-3 mx-lg-2 border rounded card">
        <Carousel
          Cid={props.id}
          Imgs={props.Imgs}
          style={null}
          onClick={null}
        ></Carousel>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{props.title}</h3>

          <p className="card-text">{props.description}</p>

          <h4 className="card-text text-white text-bold">LKR {props.price}</h4>
          {props.isDiscountApplied && (
            <span className="text-bold text-body-secondary display-inline">
              <del>LKR {props.priceBeforeDiscount}</del>
            </span>
          )}
          {props.availableUnits !== undefined && (
            <p className="card-text text-body-secondary">
              {props.availableUnits === 0 ? (
                <small className="text-danger text-bold">Out of Stock</small>
              ) : (
                <small>
                  {props.availableUnits < 5
                    ? `Only ${props.availableUnits} Units Left`
                    : `${props.availableUnits} Units Left`}
                </small>
              )}
            </p>
          )}
          <div className="py-0 flex-column">
            <p className="card-text mb-1">
              <small class="text-bold text-body-secondary">by {props.seller}</small>
            </p>

            <a href={props.productUrl}>
              { props.availableUnits && props.availableUnits > 0 ? (
                <Button label="Buy Now" className="btn btn-primary m-0" />
              ) : (
                <Button label="View" className="btn btn-primary m-0" />

              )}              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
