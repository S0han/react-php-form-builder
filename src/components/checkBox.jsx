import React from "react";

const CheckBox = ({ label, options = [] }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              name={label}
              value={option}
            />{" "}
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;