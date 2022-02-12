import React from "react";
import Directory from "../Directory";

const Title = ({ titleName, dirName }) => {
  return (
    <div className="title">
      <Directory dirName={dirName} /> <span className="name">{titleName}</span>
    </div>
  );
};

export default Title;
