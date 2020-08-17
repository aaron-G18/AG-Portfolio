import React from "react";
import "./style.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function bottomLinks(props) {
  // functions

  return (
    <div className="bottom-links">
        <a className="link" href="https://www.linkedin.com/in/aaron-garner-53066346/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="2em" />
        </a>
        <a className="link" href="https://github.com/aaron-G18" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2em" color="light-blue" />
        </a>
    </div>
  );
}