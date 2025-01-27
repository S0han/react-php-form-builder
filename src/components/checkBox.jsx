import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="form-group">
      <label>
        <input type="checkbox" /> {label}
      </label>
    </div>
  );
};

export default Checkbox;