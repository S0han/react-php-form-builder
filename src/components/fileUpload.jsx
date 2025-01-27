import React from "react";

const FileUpload = ({ label, required, onChange }) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <input
        type="file"
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default FileUpload;
