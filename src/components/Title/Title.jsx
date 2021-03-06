import React from "react";
import Directory from "../Directory";

const Title = ({ titleName, dirName }) => {
  return (
    <div className="title">
      <Directory dirName={dirName} />{" "}
      <span className="name">
        <span className="cat">cat</span> ./{titleName}.txt
      </span>
    </div>
  );
};

export default Title;
