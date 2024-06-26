import React, { useState, useEffect } from "react";
import Template from "./Template/Template";
import HeaderImage from "../Images/ecommerce.png";
import Image from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import logo2 from "../Images/logo2.png";
import GlowButton from "../Components/Buttons/glowButton.js";
import Button from "../Components/Buttons/button.js";
import { ProductGet } from "../API/ProductsApi";
import ProductItem from "../Components/ProductItem/ProductItem.js";
import defaultImg from "../Images/no-image.png";
import { calculateDiscount } from "../API/ProductsApi";
import Carousel from "../Components/Carousel/Carousel.js";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function LandingPage() {
  const [products, setProduct] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const limit = 8;

  const getlist = () => {
    if (isloading) {
      console.log("loading");
      return;
    }
    setIsLoading(true);
    console.log("start loading");
    ProductGet(limit, 0)
      .then((res) => {
        console.log(res.data.products);
        setIsLoading(false);
        let tmp = [];
        res.data.products.map((element) => {
          let imgs = [];
          if (element.ProductImgs.length > 0) {
            element.ProductImgs.forEach((ele) => {
              imgs.push(
                `${process.env.REACT_APP_BASE_URL}/uploads/${ele.imgUrl}`
              );
            });
          } else {
            imgs.push(defaultImg);
          }
          const { price, isDiscountApplied, remainingDays } = calculateDiscount(
            element.UnitPrice,
            element.Discount,
            element.DiscountEndDate
          );
          tmp.push({
            title: element.DisplayName,
            description: element.Description,
            Imgs: imgs,
            productUrl: "/viewProduct/" + element.ProductId,
            seller: element.Seller.DisplayName,
            Price: price,
            isDiscountApplied: isDiscountApplied,
            priceBeforeDiscount: element.UnitPrice,
            availableUnits: element.AvailableUnits,
            category: element.Category,
            productId: element.ProductId,
            Discount: element.Discount,
            remainingDays: remainingDays,
          });
        });
        setProduct([...tmp]);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    getlist();
  }, []);

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
          backgroundImage: `linear-gradient(rgba(0,0,0, .9),rgba(0,0,0, .9),rgba(0,0,0, .9),rgba(0,0,0, .9), rgba(13,17,23, 1)),url(${HeaderImage})`,
          height: "91vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: "-80px -12px 0",
        }}
      >
        <div class="d-flex flex-column h-100 justify-content-center align-items-center">
          <img
            src={logo2}
            style={{
              maxHeight: "40%",
            }}
            className="img-fluid p-4"
          />
        </div>
      </main>

      <div class="container my-5">
        <div
          class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg"
          style={{
            backgroundColor: "#1A2029",
          }}
        >
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

      <div class="container py-5">
        <h2 class="display-5 text-center">Latest Items</h2>
        <div className="container-sm my-3 rounded">
          <div className="container-fluid mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {products.map((product, index) => (
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
                  discount={product.Discount}
                  remainingDays={product.remainingDays}
                ></ProductItem>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <a className="link-underline link-underline-opacity-0" href="/browse">
            <button
              className="btn btn-lg shadow-4 px-5 py-2"
              style={{ backgroundColor: "#2C384D" }}
            >
              Shop More
            </button>
          </a>
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

      <section class="py-4 py-md-5 py-xl-10">
        <div
          class="container rounded-5"
          style={{
            padding: "150px 20px 150px",
            backgroundColor: "#1A2029",
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
                    class="form-control form-control-lg border-0 bg-light-subtle text-light"
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
                    class="btn btn-lg shadow-4"
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
