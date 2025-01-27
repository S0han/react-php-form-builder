import React from "react";

const TextArea = ({ label, placeholder, required }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={placeholder} required={required}></textarea>
    </div>
  );
};

export default TextArea;