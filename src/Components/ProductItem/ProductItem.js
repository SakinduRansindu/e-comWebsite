import React from "react";
import Carousel from "../Carousel/Carousel";
import Button from "../../button.js";

export default function ProductItem({ ...props }) {
  return (
    <div className="col">
      <div
        className="card h-100 border-0"
        style={{ backgroundColor: "#1A2029" }}
      >
        <Carousel
          className="card-img-top"
          Cid={props.id}
          Imgs={props.Imgs}
          style={null}
          onClick={null}
        ></Carousel>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <div className="d-flex align-items-center">
            <p className="card-text mb-0  text-white fs-4 mr-2">
              LKR {props.price}
            </p>
            <span className="text-bold text-body-secondary display-inline m-2">
              {props.isDiscountApplied && (
                <del>LKR {props.priceBeforeDiscount}</del>
              )}
            </span>
          </div>

          {props.availableUnits !== undefined && (
            <p className="card-text text-body-secondary">
              {props.availableUnits === 0 ? (
                <small className="badge text-wrap text-bg-danger">
                  Out of Stock
                </small>
              ) : (
                <small
                  class="badge text-wrap text-black"
                  style={{ backgroundColor: "#548AFF" }}
                >
                  {props.availableUnits < 5
                    ? `Only ${props.availableUnits} Units Left`
                    : `${props.availableUnits} Units Left`}
                </small>
              )}
            </p>
          )}
        </div>
        <div className="card-body d-flex align-items-end">
          <div className="py-0 flex-column">
            <a href={props.productUrl}>
              {props.availableUnits && props.availableUnits > 0 ? (
                <Button label="Buy Now" className="btn btn-primary m-0" />
              ) : (
                <Button label="View" className="btn btn-primary m-0" />
              )}
            </a>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-text mb-1">
            <small class="text-bold text-body-secondary">
              by {props.seller}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
