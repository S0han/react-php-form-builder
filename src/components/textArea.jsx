import React from "react";

const TextArea = ({ label, placeholder, required, onChange }) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <textarea
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="form-control"
      ></textarea>
    </div>
  );
};

export default TextArea;
