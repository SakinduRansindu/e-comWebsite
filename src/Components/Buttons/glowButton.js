import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import "./glowButton.css";

const GlowButton = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant

  return (
    <button class="glwbtn" disabled={disabled}>
      {label}
    </button>
  );
};

export default GlowButton;
