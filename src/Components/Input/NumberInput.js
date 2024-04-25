import React from "react";

export default function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  isRequired = false,
  min=0,
  ...props
}) {
  return (
    <div class="m-2 mb-3">
      {label && (
        <label htmlFor="customInput" className="form-label">
          {label}
        </label>
      )}
      <input
        className="form-control"
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        aria-label={label}
        aria-required={isRequired}
        min={min}
        {...props}

      />
    </div>
  );
}
