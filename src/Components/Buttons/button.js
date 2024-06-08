import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./button.css";

const Button = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant

  return (
    <button disabled={disabled} className="btn1">
      {label}
    </button>
  );
};

export default Button;
