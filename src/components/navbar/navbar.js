import React from "react";
import "./style.css";
import { AiOutlineFileText, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function navbar(props) {
  return (
    <div className="navbar">
      <h1>Aaron Garner</h1>
      <div data-tip="My LinkedIn" className="bottom-link">
      <a href="https://www.linkedin.com/in/aaron-garner-53066346/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className="linkedin" size="5vw" color="blue" />
      </a>
    </div>
    <div data-tip="My Github" className="bottom-link">
      <a href="https://github.com/aaron-G18" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="github" size="5vw" color="blue" />
      </a>
    </div>
    <div data-tip="My Resume" className="bottom-link">
      <a href="./resume/resume.pdf" target="_blank" rel="noopener noreferrer">
          <AiOutlineFileText className="email" size="5vw" color="blue" />
      </a>
    </div>
    <div data-tip="Email me" className="bottom-link">
      <a href="mailto:aaron.garner.1982@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className="email" size="5vw" color="blue" />
      </a>
    </div>
  </div>
  );
}
