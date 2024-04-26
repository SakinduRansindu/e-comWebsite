import React from "react";

export default function TextAreaInput({
  label,
  value,
  onChange,
  placeholder,
  isRequired = false,
  rows=3,
  ...props
}) {
  return (
    <div class="m-2 mb-3">
      {label && (
        <label htmlFor="customInput" className="form-label">
          {label}
        </label>
      )}
      <textarea
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        aria-label={label}
        aria-required={isRequired}
        rows={rows}
        {...props}

      />
    </div>
  );
}
