import React from "react";

const Directory = ({ dirName }) => {
  return (
    <span className="dir">
      ➔ <span className="symbol">{dirName}</span>
    </span>
  );
};

export default Directory;
