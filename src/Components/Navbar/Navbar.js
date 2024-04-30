import React from "react";

export default function Navbar({ ...props }) {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary rounded sticky-top"
        aria-label="Eleventh navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MerchMora
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
