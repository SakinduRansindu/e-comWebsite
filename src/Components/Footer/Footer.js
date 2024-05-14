import React from "react";
import "./Footer.css";

export default function Footer({ ...props }) {
  return (
    <>
      <footer class="py-5 px-5 shadow">
        <div class="row justify-content-between">
          <div class="col-6 col-md-2 mb-3">
            <h5>MerchMora</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Support</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Help & Support
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Terms & Conditions
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-outline-light" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 MerchMora. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="bi bi-facebook h4" width="24" height="24"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="bi bi-twitter-x h4" width="24" height="24"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="bi bi-instagram h4" width="24" height="24"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
