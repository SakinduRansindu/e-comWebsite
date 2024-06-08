import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { GetProductDetails } from "../../API/ProductsApi";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import "./productDetails.css"; // Import the CSS file

const ProductDetails = ({ pid, minimalData = false }) => {
  const [product, setProduct] = useState({});
  const [state, setState] = useState("loading");
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    GetProductDetails(pid)
      .then((res) => {
        setProduct(res.data.product);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setState("error");
      });
  }, [pid]);

  useEffect(() => {
    if (!minimalData && product?.ProductImgs) {
      const tmpImgs = product.ProductImgs.map(
        (img) => `${process.env.REACT_APP_BASE_URL}/uploads/` + img.imgUrl
      );
      setImgs(tmpImgs);
      setState("loaded");
    } else if (minimalData && product?.DisplayName) {
      setState("loaded");
    }
  }, [product, minimalData]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/payments/${product.ProductId}`);
  };

  if (!minimalData && state === "loaded") {
    return (
      <section class="py-5">
        <div class="container">
          <div class="row gx-5">
            <aside class="col-lg-6">
              <div class=" mb-3 d-flex justify-content-center">
                <Carousel Imgs={imgs} Cid=""></Carousel>
              </div>
            </aside>
            <main class="col-lg-6">
              <div class="ps-lg-3">
                <h2 class="title text-light">{product.DisplayName}</h2>
                <div>
                  <span className="h6">Category: </span>
                  <span>{product.Category}</span>
                  <dd class="col-1"></dd>
                </div>
                <div class="d-flex flex-row my-3">
                  <span class="text-muted">
                    <span class="text-body-secondary ">
                      {product.AvailableUnits > 0 ? (
                        <p
                          className="badge fw-medium fs-6 text-muted"
                          style={{
                            backgroundColor: "#1A2029",
                          }}
                        >
                          Available Units: {product.AvailableUnits}
                        </p>
                      ) : (
                        <p className="badge fw-medium fs-6 text-bg-danger">
                          Out of Stock
                        </p>
                      )}
                    </span>
                  </span>
                </div>

                <div class="rounded p-4" style={{ backgroundColor: "#1A2029" }}>
                  <p className="text-muted">Description:</p>
                  <p>{product.Description}</p>
                </div>

                <div class="my-4">
                  <span class="pe-2 display-4">
                    LKR {(product.UnitPrice * (100 - product.Discount)) / 100}
                  </span>
                  <span class="text-muted fs-5">
                    <strike>LKR {product.UnitPrice}</strike>
                  </span>
                </div>
                <div class="d-flex flex-row ">
                  <button
                    disabled={product.AvailableUnits === 0}
                    className="btn btn-light add-to-cart px-5"
                    onClick={handleClick}
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        `${product.DisplayName} has been added to your cart!`
                      )
                    }
                    disabled={product.AvailableUnits === 0}
                    className="btn add-to-cart ms-3"
                    style={{ backgroundColor: "#2C384D" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    );
  } else if (minimalData && state === "loaded") {
    return (
      <div className="card w-50 mx-auto bg-success">
        <div className="container m-1">
          <h4>{product.DisplayName}</h4>
          <p>Discount: {product.Discount}%</p>
          <p>
            Price: Rs. {(product.UnitPrice * (100 - product.Discount)) / 100}
          </p>
        </div>
      </div>
    );
  } else if (state === "loading") {
    return (
      <Alert
        title={"Loading"}
        message={"Please wait while we load the product details"}
        type={"alert-info"}
      />
    );
  } else if (state === "error") {
    return (
      <Alert
        title={"Error"}
        message={"There was an error loading the product details"}
        type={"alert-danger"}
      />
    );
  }

  return null;
};

export default ProductDetails;
