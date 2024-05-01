import React from 'react';

const Button = ({ label, onClick, disabled, variant = "primary" }) => {
  // Define button styles based on variant
  const buttonStyles = {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    
  };

  return (
    <button
      disabled={disabled}
      style={buttonStyles[variant]}
    >
      {label}
    </button>
  );
};

export default Button;
