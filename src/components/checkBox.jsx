import React from "react";

const Checkbox = ({ label, onChange }) => {
  return (
    <div className="form-group">
      <label>
        <input type="checkbox" onChange={onChange} /> {label}
      </label>
    </div>
  );
};

export default Checkbox;
