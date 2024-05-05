import React from "react";
import Template from "./Template/Template";
import HeaderImage from "../Images/ecommerce.png";
import Image from "../Images/image1.png";

export default function LandingPage() {
  return (
    <Template renderSlideBar={false}>
      {/*<div>
        <img
          src={HeaderImage}
          alt="landing page"
          className="img-fluid rounded-1"
          style={{
            filter: "brightness(15%)",
          }}
        />
        <h1
          class="display-1 fw-bold text-body-emphasis"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          MerchMora
        </h1>
        </div>*/}

      <main
        class="px-3"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .9)),url(${HeaderImage})`,
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: "-80px -12px 0",
        }}
      >
        <div class="d-flex flex-column h-100 justify-content-center align-items-center">
          <h1 class="display-1 fw-bold text-body-emphasis ">MerchMora</h1>
        </div>
      </main>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">
              Welcome to MerchMora <br></br> E-commerce Store!
            </h1>
            <p class="col-md-8 fs-4">
              Shop the latest Mora trends and discover amazing deals.
            </p>
            <a className="btn btn-primary btn-lg" href="/browse">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={Image}
              class="d-block mx-lg-auto img-fluid rounded-1"
              alt="img"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Ready to Show Your Mora Pride?
            </h1>
            <p class="lead">
              Start browsing our collections now and find the perfect pieces to
              represent your connection to the University of Moratuwa. From
              classic favorites to new releases, MerchMora is your destination
              for all things UoM!
            </p>
          </div>
        </div>
      </div>
    </Template>
  );
}
