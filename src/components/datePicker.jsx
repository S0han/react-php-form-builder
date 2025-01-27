import React from "react";

const DatePicker = ({ label, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" required={required} />
    </div>
  );
};

export default DatePicker;