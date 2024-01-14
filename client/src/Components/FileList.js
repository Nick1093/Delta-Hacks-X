import React from "react";

const FileList = ({ files }) => {
  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>{file.name}</div>
      ))}
    </div>
  );
};

export default FileList;
