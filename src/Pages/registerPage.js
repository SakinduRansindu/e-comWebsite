import React from "react";
import Register from "../Components/Register/Register";
import Template from "./Template/Template";
import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [isCustomer, setIsCustomer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    console.log(isCustomer);
  }, [isCustomer, isSeller]);

  if (!(isSeller || isCustomer)) {
    return (
      <Template renderSlideBar={false}>
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <span class="mb-4 display-5">Register</span>
          </header>

          <div class="row align-items-md-stretch row-gap-3 py-3">
            <div class="col-md-6">
              <div class="h-100 p-5 border rounded-3">
                <h2>For Customers</h2>
                <p>browse items</p>
                <button
                  class="btn btn-outline-light"
                  type="button"
                  onClick={() => setIsCustomer(true)}
                >
                  Register as a customer
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 border rounded-3">
                <h2>For Sellers</h2>
                <p>Sell items</p>
                <button
                  class="btn btn-outline-light "
                  type="button"
                  onClick={() => setIsSeller(true)}
                >
                  Register as a seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  } else if (isSeller) {
    return (
      <Template renderSlideBar={false}>
        <Register role="seller"></Register>
      </Template>
    );
  } else {
    return (
      <Template renderSlideBar={false}>
        <Register role="customer"></Register>
      </Template>
    );
  }
}
