import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const Button = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant
  const buttonStyles = {
    primary: {
      backgroundColor: "#A1BFF4",
      color: "black",
      padding: "5px 20px",
      borderRadius: "5px",
      border: "0px",
      cursor: "pointer",
      width: "auto",
    },
  };

  return (
    <button disabled={disabled} style={buttonStyles[variant]}>
      {label}
    </button>
  );
};

export default Button;
