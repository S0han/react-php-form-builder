import React from "react";

const TextInput = ({ label, placeholder, required, onChange }) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default TextInput;