import React from "react";
import Template from "./Template/Template";
import HeaderImage from "../Images/ecommerce.png";
import Image from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import logo2 from "../Images/logo2.png";
import logo1 from "../Images/logo1.png";
import top from "../Images/top.jpg";
import bottom from "../Images/bottom.jpg";
import cap from "../Images/cap.jpg";
import badge from "../Images/badge.jpg";
import keytag from "../Images/keytag.jpg";
import band from "../Images/band.jpg";
import all from "../Images/all.jpg";
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
            <img class="rounded-lg-3" src={Image2} alt="" width="520" />
          </div>
        </div>
      </div>

      <section
        class="py-5 py-xl-8 "
        style={{
          margin: "0px -12px 0",
          backgroundColor: "#A1BFF4",
        }}
      >
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center text-dark">
                Top Categories
              </h2>

              <hr class="w-50 mx-auto mb-2 mb-xl-3 border-dark" />
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6 mb-4 ">
              <div
                class="card border-0"
                style={{
                  height: "600px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${top})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Tops
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "600px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${bottom})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Bottoms
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${band})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Wrist Bands
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${cap})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Caps
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${badge})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Badge
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${keytag})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    Key tags
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${cap})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    All
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div
                class="card border-0"
                style={{
                  height: "400px",
                }}
              >
                <div
                  class="card-body rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)),url(${all})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <h1 class="card-title d-flex h-100 justify-content-center align-items-center">
                    All
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section class="py-4 py-md-5 py-xl-10">
        <div
          class="container bg-black rounded-5"
          style={{
            padding: "150px 20px 150px",
          }}
        >
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
              <h2
                class="display-4 mb-4 mb-md-5 mb-xxl-6 text-center text-light"
                style={{
                  color: "#12161d",
                }}
              >
                Subscribe to our newsletter and never miss a thing.
              </h2>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
              <form class="row gy-3 gy-lg-0 gx-lg-2 justify-content-center">
                <div class="col-12 col-lg-8">
                  <label
                    for="email-newsletter-component"
                    class="visually-hidden"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control form-control-lg border-0"
                    id="email-newsletter-component"
                    placeholder="Email Address"
                    required
                  />
                  <div
                    id="email-newsletter-help"
                    class="form-text text-center text-lg-start text-light"
                  >
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="col-12 col-lg-3 text-center text-lg-start">
                  <button
                    type="submit"
                    class="btn btn-lg "
                    style={{
                      backgroundColor: "#A1BFF4",
                      color: "black",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}
