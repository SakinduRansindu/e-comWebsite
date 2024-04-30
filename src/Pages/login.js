import React, { useState } from "react";
import { AuthData } from "../Components/AuthWrapper/AuthWrapper";
import { Navigate } from "react-router-dom";
import TextInput from "../Components/Input/TextInput";
import TextAreaInput from "../Components/Input/TextAreaInput";
import NumberInput from "../Components/Input/NumberInput";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Login() {
  const { userLogin, user } = AuthData();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (username, password) => {
    if (username === "" || password === "") {
      alert("Please enter username and password");
    } else {
      userLogin(username, password)
        .then((res) => {
          alert("Done :" + res);
        })
        .catch((err) => {
          alert("Error :" + err);
        });
    }
  };

  return !user.isLogedIn ? (
    <div className="w-3">
      <Navbar />
      <h1>Login page</h1>
      <form>
        <TextInput
          type="text"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isRequired="true"
          placeholder="Username"
        ></TextInput>
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></TextInput>
        <button onClick={(e) => checkLogin(username, password)}>Login</button>
      </form>
      <TextAreaInput
        label="TextArea input"
        isRequired="true"
        placeholder="Text are"
      ></TextAreaInput>

      <NumberInput
        label="Number input"
        isRequired="true"
        placeholder="Number input"
        max="20"
      ></NumberInput>
      <Footer />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
