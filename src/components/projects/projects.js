import React from "react";
import "./style.css";



export default function bottomLinks(props) {
  

  return (
    <div className="projects">
        <div className="project1">
          <div className="proj1-text">
            <h3>Project 1 Title</h3>
            <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          </div>
          <img className="proj1-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
        <br />
        <hr className="hr-short" />
        <div className="project2">
          <div className="proj2-text">
            <h3>Project 2 Title</h3>
            <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          </div>
          <img className="proj2-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
        <br />
        <hr className="hr-short" />
        <div className="project3">
          <div className="proj3-text">
            <h3>Project 3 Title</h3>
            <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          </div>
          <img className="proj3-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
    </div>
  );
}