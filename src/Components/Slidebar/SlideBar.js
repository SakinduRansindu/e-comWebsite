import React from 'react'

export default function SlideBar({ ...props }) {
    return (
        <>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="search-slider" aria-labelledby="search-sliderLabel">
                <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Filters</span>
                </p>
                <hr />
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Search" />
                </div>

                <div className="mb-3">
                    <label htmlFor="category-select" className="form-label">Category:</label>
                    <select className="form-select" id="category-select">
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="organization-select" className="form-label">Organization:</label>
                    <select className="form-select" id="organization-select">
                        <option value="">All</option>
                        <option value="org1">Organization 1</option>
                        <option value="org2">Organization 2</option>
                        <option value="org3">Organization 3</option>
                    </select>
                </div>

                <button class="btn btn-primary position-absolute bottom-0 m-3 end-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#search-slider" aria-controls="search-slider">
                    Back
                </button>
                
            </div>
            <button class="btn btn-primary rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#search-slider" aria-controls="search-slider">
            <i class="fas fa-search"></i>
            </button>
        </>
    )
}
