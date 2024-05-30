import React from "react";

export default function Carousel({ ...props }) {
  return (
    <div
      id={"carouselId" + props.Cid}
      style={props.style}
      className="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div className="carousel-inner" onClick={props.onClick}>
        {props.Imgs.map((e, i) => {
          return (
            <div
              key={i}
              className={"carousel-item " + (i === 0 ? "active" : "")}
            >
              <img
                src={e}
                className="d-block w-100 Cimg"
                alt={"Product Item " + props.Cid}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#carouselId" + props.Cid}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#carouselId" + props.Cid}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
