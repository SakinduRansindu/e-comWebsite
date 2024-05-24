import React, { useState, useEffect } from "react";
import { AuthData } from "../Components/AuthWrapper/AuthWrapper";
import { useNavigate } from "react-router-dom";
import TextInput from "../Components/Input/TextInput";
import Template from "./Template/Template";
import Alert from "../Components/Alert/Alert";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import backgroundImage from "../Images/ecommerce1.jpg";
import Logo from "../Images/logo.png";

export default function Login() {
  const { userLogin, user, clearMsgs } = AuthData();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({
    color: "alert-danger",
    message: "",
    hasError: false,
  });
  const [display, setDisplay] = useState(false);

  const clear = () => {
    setPassword("");
    setEmail("");
    setDisplay(false);
  };

  useEffect(() => {
    console.log(user.loginMsg);
    if (user.loginMsg != "") {
      setMessage({
        color: "alert-warning",
        message: user.loginMsg,
        hasError: true,
      });
      setDisplay(true);
      clearMsgs();
    }
  }, []);

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setDisplay(false);
    }, 5000);
  }, [message]);

  const checkLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((res) => {
        setMessage({ color: "alert-success", message: res, hasError: false });
        setDisplay(true);
        console.log(res);
        navigate("/browse");
      })
      .catch((err) => {
        console.error(err);
        setMessage({ color: "alert-danger", message: err, hasError: true });
        setPassword("");
        setDisplay(true);
      });
  };

  return (
    <Template RedirectIfLoged="/browse" renderSlideBar={false}>
      <form className="container mx-auto my-3 border rounded p-3">
        {/* <h1>Login page</h1> */}
        

        <section
        class=" py-3 py-md-5 py-xl-8"
        /*style={{ backgroundImage: `url(${backgroundImage})` }}*/
      >
        <div class="container">
          <div class="row gy-4 align-items-center">
            <div class="col-12 col-md-6 col-xl-7">
              <div class="d-flex justify-content-center ">
                <div class="col-12 col-xl-9">
                  <div class="container-fluid p-1  d-flex align-items-center justify-content-center">
                    <img
                      class="img-fluid rounded mb-4"
                      loading="lazy"
                      src={Logo}
                      width="100"
                      height="80"
                      alt="MerchMora Logo"
                    />
                  </div>
                  <hr class="border-white-subtle mb-4" />
                  <h2 class="h1 mb-4">
                  We create Mora merch that makes you proud to wear.                  </h2>
                  <p class="lead mb-5">
                  We design apparel, accessories, and gifts that showcase Mora spirit and unique style.</p>
                  <div class="text-endx">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="currentColor"
                      class="bi bi-grip-horizontal"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-5">
              <div class="card border-1 rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-4">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            value={email}
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label for="email" class="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label for="password" class="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            name="remember_me"
                            id="remember_me"
                          />
                          <label
                            class="form-check-label text-secondary"
                            for="remember_me"
                          >
                            Keep me logged in
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                        <button
                            class="btn btn-primary btn-lg"
                            style={{ backgroundColor: "#121f31" }}
                            disabled={display}
                            type="submit"
                            onClick={(e) => checkLogin(e)}
                          >
                            Log in now
                          </button>
                        </div>
                        {/* <button
                        disabled={display}
                        type="button"
                        onClick={(e) => clear()}
                        className="btn btn-danger my-3"
                      >
                        Clear
                      </button> */}
                      </div>
                    </div>
                    {display ? (
                        <Alert
                          title={!message.hasError ? "Success" : "Error"}
                          message={message.message}
                          type={message.color}
                        ></Alert>
                      ) : (
                        <div className="my-4"></div>
                      )}
                  </form>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                        <a href="#!">Forgot password</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>


    </Template>
  );
}
