import React from "react";

const RadioButtons = ({ label, options = [], onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={label}
              value={option}
              onChange={onChange}
            />{" "}
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;