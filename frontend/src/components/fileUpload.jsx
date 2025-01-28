import React from "react";

const FileUpload = ({ label, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="file" required={required} />
    </div>
  );
};

export default FileUpload;
