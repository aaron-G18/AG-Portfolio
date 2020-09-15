import React from "react";
import "./style.css";
import { AiOutlineFileText, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';


export default function bottomLinks(props) {
  // functions

  //
  // Need to correctly align side bar links and labels.
  //

  return (
    <div className="side-links">
      <div data-tip="My LinkedIn" className="link">
        <a href="https://www.linkedin.com/in/aaron-garner-53066346/" target="_blank" rel="noopener noreferrer">
          <p className="link-tag">LinkedIn</p>
          <AiFillLinkedin className="linkedin logos" size="3vw" color="blue" />
        </a>
      </div>
      <div data-tip="My Github" className="link">
        <a href="https://github.com/aaron-G18" target="_blank" rel="noopener noreferrer">
          <p className="link-tag">GitHub</p>
          <AiFillGithub className="github logos" size="3vw" color="blue" />
        </a>
      </div>
      <div data-tip="My Resume" className="link">
        <a href="./resume/resume.pdf" target="_blank" rel="noopener noreferrer">
          <p className="link-tag">Resume</p>
          <AiOutlineFileText className="resume logos" size="3vw" color="blue" />
        </a>
      </div>
      <div data-tip="Email me" className="link">
        <a href="mailto:aaron.garner.1982@gmail.com" target="_blank" rel="noopener noreferrer">
          <p className="link-tag">Email</p>
          <AiOutlineMail className="email logos" size="3vw" color="blue" />
        </a>
      </div>
      <ReactTooltip place="top" type="dark" effect="float"/>
    </div>
  );
}