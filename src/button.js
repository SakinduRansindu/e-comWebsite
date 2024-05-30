import React from "react";

const Button = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant
  const buttonStyles = {
    primary: {
      backgroundColor: "#121f31",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "1px solid #0a58ca",
      cursor: "pointer",
    },
  };

  return (
    <button disabled={disabled} style={buttonStyles[variant]}>
      {label}
    </button>
  );
};

export default Button;
