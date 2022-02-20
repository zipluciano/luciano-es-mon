import React from "react";
import Title from "../Title";

const Technologies = () => {
  return (
    <>
      <br />
      <Title dirName={"Documents"} titleName={"tecnologias"} />
      <h3>
        <u>Web Stack</u>
      </h3>
      <br />
      <h3>
        <u>Front-end</u>
      </h3>
      <ul>
        <li>
          <h3>HTML</h3>
        </li>
        <li>
          <h3>CSS</h3>
        </li>
        <li>
          <h3>Javascript</h3>
        </li>
        <li>
          <h3>React.js</h3>
        </li>
      </ul>
      <br />
      <h3>
        <u>Back-end</u>
      </h3>
      <ul>
        <li>
          <h3>Node.js</h3>
        </li>
        <li>
          <h3>Express</h3>
        </li>
        <li>
          <h3>Postgres</h3>
        </li>
      </ul>
    </>
  );
};

export default Technologies;
