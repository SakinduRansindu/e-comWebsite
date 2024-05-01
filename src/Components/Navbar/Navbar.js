import React from "react";
import { AuthData } from "../AuthWrapper/AuthWrapper";
import {useNavigate} from 'react-router-dom';

export default function Navbar({ ...props }) {
  const { user } = AuthData();
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", link: "/" ,allowed:["seller","user","not-logged"]},
    { name: "Browse", link: "/browse",allowed:["seller","user","not-logged"]},
    { name: "Manage Products", link: "/products", allowed:["seller"]},
    { name: "Register", link: "/register", allowed:["not-logged"]},

  ];
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
              {navLinks.map((element, index) => {
                if (
                  element.allowed.includes(user.role) ||
                  element.allowed.includes("not-logged")
                ) {
                  return (
                    <li className="nav-item" key={index}>
                      <a className="nav-link" href={element.link}>
                        {element.name}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              {
              user.isLogedIn ?(
               <button onClick={()=>navigate('/logout')} className="btn btn-primary">Logout</button>
              ):(
                  <button onClick={()=>navigate('/login')} className="btn btn-primary">Login</button>
              )
            }
                
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}