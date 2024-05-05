import React from "react";

export default function Footer({ ...props }) {
  return (
    <>
      <div class="container">
        <footer class="py-3 my-4  rounded-1 ">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-body-secondary">&copy; 2024 MerchMora</p>
        </footer>
      </div>
    </>
  );
}
