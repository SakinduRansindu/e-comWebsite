import React from "react";
import Template from "./Template/Template";
import HeaderImage from "../Images/ecommerce.png";
import Image from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import logo2 from "../Images/logo2.png";
import GlowButton from "../Components/Buttons/glowButton.js";
import Button from "../Components/Buttons/button.js";

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
          height: "91vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: "-80px -12px 0",
        }}
      >
        <div class="d-flex flex-column h-100 justify-content-center align-items-center">
          <img src={logo2} width="45%" />
        </div>
      </main>

      <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to MerchMora <br></br> E-commerce Store!
            </h1>
            <p class="lead">
              Shop the latest Mora trends and discover amazing deals.
            </p>
            <br />

            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                className="link-underline link-underline-opacity-0"
                href="/browse"
              >
                <GlowButton
                  label={"Shop Now"}
                  className="btn btn-primary m-0"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={Image2} alt="" width="720" />
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
