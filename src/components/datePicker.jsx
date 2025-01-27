import React from "react";

const DatePicker = ({ label, required, onChange }) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <input
        type="date"
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default DatePicker;
