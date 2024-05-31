import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const Button = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant
  const buttonStyles = {
    primary: {
      backgroundColor: "#548AFF",
      color: "black",
      padding: "10px 20px",
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
