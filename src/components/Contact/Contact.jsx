import React from "react";
import Title from "../Title";

const Contact = () => {
  return (
    <>
      <br />
      <Title dirName={"Documents"} titleName={"contato"} />
      <h3>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgDHWcZNZLrQVPLgzPxtrcSlpqNkTDHFjwQftLMJfhttJMZgjStLGPVgSXpTWqHzfFfvq"
          target="_blank"
          rel="noreferrer"
        >
          E-mail
        </a>
      </h3>
      <h3>
        <a
          href="https://www.linkedin.com/in/luciano-espindula/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </h3>
      <h3>
        <a
          href="https://github.com/zipluciano"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </h3>
    </>
  );
};

export default Contact;
