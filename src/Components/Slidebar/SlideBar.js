import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SlideBar.css";

export default function SlideBar({ ...props }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-start p-3 border-0 shadow"
        tabindex="-1"
        id="search-slider"
        aria-labelledby="search-sliderLabel"
      >
        <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="display-5 ">Filters</span>
        </p>
        <hr />
        <div className="mb-3 input-group mb-4 border rounded-pill p-1">
          <input
            type="search "
            className="form-control bg-transparent rounded-start-pill border-0"
            placeholder="Search"
          />
          <span class="input-group-append border-0" id="search-addon">
            <button
              id="button-addon3"
              type="button"
              class="btn btn-link text-white"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </span>
        </div>

        <div className="mb-3 ">
          <label htmlFor="category-select" className="form-label">
            Category:
          </label>
          <select
            className="form-select shadow border"
            style={{ backgroundColor: "#2C384D" }}
            id="category-select"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="organization-select" className="form-label">
            Organization:
          </label>
          <select
            className="form-select shadow-4 border"
            style={{ backgroundColor: "#2C384D" }}
            id="organization-select"
          >
            <option value="">All</option>
            <option value="org1">Organization 1</option>
            <option value="org2">Organization 2</option>
            <option value="org3">Organization 3</option>
          </select>
        </div>

        <div className="mb-3">
          <button
            className="btn shadow"
            style={{ backgroundColor: "#2C384D" }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#search-slider"
            aria-controls="search-slider"
          >
            Search
          </button>
        </div>

        <button
          className="btn shadow position-absolute bottom-0 m-3 end-0"
          style={{ backgroundColor: "#2C384D" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#search-slider"
          aria-controls="search-slider"
        >
          Back
        </button>
      </div>
      <div className="position-fixed top-50 start-0 ">
        <button
          className="btn btn-primary border-0 rounded-0 rounded-end-circle shadow p-3"
          id="glass"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#search-slider"
          aria-controls="search-slider"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
}
