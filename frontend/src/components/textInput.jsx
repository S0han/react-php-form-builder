import React from "react";

const TextInput = ({ label, placeholder, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} required={required} />
    </div>
  );
};

export default TextInput;