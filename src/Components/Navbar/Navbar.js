import React from "react";

export default function Navbar({ ...props }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded sticky-top"
        aria-label="Eleventh navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MerchMora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
