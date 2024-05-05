import React from "react";
import Carousel from "../Carousel/Carousel";

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
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.description}</p>

          <div className="card-bodyd-flex py-2 flex-column">
            <p className="card-text">
              <small class="text-body-secondary">by {props.seller}</small>
            </p>
            <a href={props.productUrl} className="btn btn-primary m-0">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
