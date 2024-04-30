import React from "react";

export default function CustomInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  isRequired = false,
  ...props
}) {
  return (
    <div className="m-2 mb-3">
      {label && (
        <label htmlFor="customInput" className="form-label">
          {label}
        </label>
      )}
      <input
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        aria-label={label}
        aria-required={isRequired}
        {...props}
      />
      {/* <div class="invalid-feedback">
        {invalidMsg}
      </div> */}
    </div>
  );
}
