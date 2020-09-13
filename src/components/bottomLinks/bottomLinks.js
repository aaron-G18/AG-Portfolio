import React from "react";
import "./style.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function bottomLinks(props) {
  // functions

  return (
    <div className="bottom-links">
        <a className="link" href="https://www.linkedin.com/in/aaron-garner-53066346/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="linkedin" size="3vw" />
        </a>
        <a className="link" href="https://github.com/aaron-G18" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="github" size="3vw" color="light-blue" />
        </a>
    </div>
  );
}