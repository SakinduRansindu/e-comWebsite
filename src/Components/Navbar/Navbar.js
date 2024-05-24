import React from "react";
import { AuthData } from "../AuthWrapper/AuthWrapper";
import { useNavigate } from "react-router-dom";
import ProfileDisplay from "../ProfilePicture/ProfileDisplay";
import logo1 from "../../Images/logo1.png";

export default function Navbar({ ...props }) {
  const { user } = AuthData();
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", link: "/", allowed: ["not-logged"] },
    { name: "Browse", link: "/browse", allowed: ["not-logged"] },
    { name: "Orders", link: "/manageOrders", allowed: ["seller"] },
    { name: "Add Products", link: "/AddProducts", allowed: ["seller"] },
    { name: "My Orders", link: "/orderStatus", allowed: ["customer"] },
    { name: "Register", link: "/register", allowed: ["not-logged"] },
  ];
  return (
    <>
      <div class="container fixed-top my-3 ">
        <nav
          className="navbar navbar-expand-lg  sticky-top shadow rounded"
          aria-label="Eleventh navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo1} height="45" style={{objectFit: 'cover',margin: 0,padding: 0,border: 'none',}}/>
            </a>

            <ProfileDisplay
              overwriteClassName="d-lg-none"
              profilePicUrl=""
              name={user.name}
            />
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
              <div className="d-lg-flex col-lg-3 justify-content-lg-end ">
                <ProfileDisplay
                  overwriteClassName="d-none d-lg-inline"
                  profilePicUrl=""
                  name={user.name}
                />
                {user.isLogedIn ? (
                  <button
                    onClick={() => navigate("/logout")}
                    className="btn btn-outline-light"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="btn btn-outline-light"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
