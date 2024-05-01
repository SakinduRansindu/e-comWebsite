import React from "react";

export default function Footer({ ...props }) {
  return (
    <>
        <footer className="py-3 my-4 " style={{'bottom':'0%','position':'relative','width':'100%'}}>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2024 MerchMora</p>
        </footer>
      </>
  );
}