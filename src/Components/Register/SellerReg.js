import React from "react";
import TextInput from "../Input/TextInput";
import ProfilePictureSet from "../ProfilePicture/ProfilePictureSet";
import { useState, useEffect } from "react";
import { createSeller } from "../../API/API";
import Alert from "../Alert/Alert";

export default function SellerReg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [DisplayName, setDisplayName] = useState("");
  const [Email, setEmail] = useState("");
  const [Bank_Acc_No, setBank_Acc_No] = useState("");
  const [Phone_No, setPhone_No] = useState("");
  const [ProfilePictureLink, setProfilePictureLink] = useState(null);
  const [message, setMessage] = useState({
    color: "alert-danger",
    message: "",
    isSuccess: false,
  });
  const [display, setDisplay] = useState(false);

  const clear = () => {
    setUsername("");
    setPassword("");
    setDisplayName("");
    setEmail("");
    setBank_Acc_No("");
    setPhone_No("");
    setDisplay(false);
  };

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      if (timeout) {
        console.log("clearing timeout");
        clearTimeout(timeout);
      }
      setDisplay(false);
      if (message.isSuccess) {
        clear();
      }
    }, 5000);
  }, [message]);

  const register = (e) => {
    e.preventDefault();
    createSeller(
      DisplayName,
      Email,
      password,
      Bank_Acc_No,
      Phone_No,
      ProfilePictureLink
    )
      .then((res) => {
        console.log(res.data.message);
        setMessage({
          color: "alert-success",
          message: res.data.message,
          isSuccess: true,
        });
        setDisplay(true);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        setMessage({
          color: "alert-danger",
          message: err.response.data.message,
          isSuccess: false,
        });
        setDisplay(true);
      });
    return false;
  };

  return (
    <>
      {/*<form className="container mx-auto my-3 border dark2 rounded p-3">
        <h1 className="">Seller Register</h1>

        {/* username,DisplayName,Email,Bank_Acc_No,Phone_No,ProfilePictureLink */}

      {/*<ProfilePictureSet
          onChange={(e) => setProfilePictureLink(e.target.files[0])}
        ></ProfilePictureSet>

        <TextInput
          type="text"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isRequired={true}
          placeholder="Username"
        ></TextInput>

        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired={true}
          placeholder="Password"
        ></TextInput>

        <TextInput
          type="text"
          label="Display Name"
          value={DisplayName}
          onChange={(e) => setDisplayName(e.target.value)}
          isRequired={true}
          placeholder="Display Name"
        ></TextInput>

        <TextInput
          type="text"
          label="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired={true}
          placeholder="Email"
        ></TextInput>

        <TextInput
          type="text"
          label="Bank Account Number"
          value={Bank_Acc_No}
          onChange={(e) => setBank_Acc_No(e.target.value)}
          isRequired={false}
          placeholder="Bank Account Number"
        ></TextInput>

        <TextInput
          type="text"
          label="Phone Number"
          value={Phone_No}
          onChange={(e) => setPhone_No(e.target.value)}
          isRequired={false}
          placeholder="Phone Number"
        ></TextInput>

        <div className="row">
          {display ? (
            <Alert
              title={message.isSuccess ? "Success" : "Error"}
              message={message.message}
              type={message.color}
            ></Alert>
          ) : null}
          <div className="col-md-12">
            <button
              disabled={display}
              type="button"
              onClick={(e) => clear()}
              className="btn btn-danger"
            >
              Clear
            </button>
            <button
              disabled={display}
              className="btn btn-success float-end"
              onClick={(e) => register(e)}
            >
              Register
            </button>
          </div>
        </div>
      </form>*/}

      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div class=" p-4 p-md-5 rounded shadow-sm">
              <div class="row">
                <div class="col-12">
                  <div class="text-center mb-5">
                    <h2 class="mb-4 display-5 text-center">Seller Register</h2>
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                  </div>
                </div>
              </div>

              <form action="#!">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12 text-center">
                    <label for="profilePicture" class="form-label">
                      Profile Image
                    </label>
                    <ProfilePictureSet
                      onChange={(e) => setProfilePictureLink(e.target.files[0])}
                    ></ProfilePictureSet>
                  </div>

                  <div class="col-12">
                    <label for="userName" class="form-label">
                      User Name <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="userName"
                        id="userName"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="DisplayName" class="form-label">
                      Display Name <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="DisplayName"
                        id="DisplayName"
                        required
                        value={DisplayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label">
                      Password <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        required
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="BankAccountNumber" class="form-label">
                      Bank Account Number
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="BankAccountNumber"
                        id="BankAccountNumber"
                        value={Bank_Acc_No}
                        onChange={(e) => setBank_Acc_No(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="PhoneNumber" class="form-label">
                      Phone Number
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="PhoneNumber"
                        id="PhoneNumber"
                        value={Phone_No}
                        onChange={(e) => setPhone_No(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      disabled={display}
                      type="button"
                      onClick={(e) => clear()}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Clear
                    </button>
                  </div>

                  {display ? (
                    <Alert
                      title={message.isSuccess ? "Success" : "Error"}
                      message={message.message}
                      type={message.color}
                    ></Alert>
                  ) : null}

                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        className="btn btn-primary btn-lg"
                        disabled={display}
                        onClick={(e) => register(e)}
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
