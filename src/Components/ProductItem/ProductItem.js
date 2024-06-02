import React from "react";
import Carousel from "../Carousel/Carousel";
// import Button from "../../button.js";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Button from "../Buttons/button.js";


export default function ProductItem({ ...props }) {
  const UnitsLeftBadge = () => {
    return (
      props.availableUnits !== undefined && (
        <p className="card-text text-body-secondary py-2">
          {props.availableUnits === 0 ? (
            <small className="badge text-wrap text-danger">Out of Stock</small>
          ) : (
            <small class="badge text-wrap text-muted">
              {props.availableUnits < 5
                ? `Only ${props.availableUnits} Units Left`
                : `${props.availableUnits} Units Left`}
            </small>
          )}
        </p>
      )
    );
  };

  const BuyNowBTN = () => {
    return (
      <a href={props.productUrl} className="align-self-center">
        {props.availableUnits && props.availableUnits > 0 ? (
          <Button
            label="Buy Now"
            className="btn btn-success my-0 mx-1 align-self-center"
          />
        ) : (
          <Button label="View" className="btn btn-primary my-0 mx-1" />
        )}
      </a>
    );
  };

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

        <div className="card-body d-flex flex-column pe-0">
          <div className="d-flex justify-content-between pt-1">
            <div>
              <h6 className="card-title mb-0">{props.title}</h6>
              <p className="card-text mb-2">
                <small class="text-bold text-body-secondary">
                  by {props.seller}
                </small>
              </p>
            </div>
            <div className="me-0">
              <p className="card-text text-body-secondary ps-1">
                {props.isDiscountApplied && (
                  <small
                    class=" badge text-wrap rounded-end-0"
                    style={{
                      backgroundColor: "#2C384D",
                      color: "#A1BFF4",
                      fontSize: "14px",
                      width: "100px",
                    }}
                  >
                    {props.discount}% off
                    <br />
                    {props.remainingDays} left
                  </small>
                )}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center mt-auto">
            <p className="card-text my-0 text-white fs-4 mr-2">
              LKR {props.price}
            </p>
            <span className="text-bold text-body-secondary display-inline mx-2">
              {props.isDiscountApplied && (
                <del>LKR {props.priceBeforeDiscount}</del>
              )}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between pt-0 p-3">
          <BuyNowBTN />

          <p className="card-text text-body-secondary align-self-center">
            <UnitsLeftBadge />
          </p>
        </div>
      </div>
    </div>
  );
}
