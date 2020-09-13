import React from "react";
import "./style.css";



export default function bottomLinks(props) {
  

  return (
    <div className="projects">
        <div className="project1">
          <h3>Project 1 Title</h3>
          <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          <img className="proj1-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
        <div className="project2">
          <h3>Project 2 Title</h3>
          <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          <img className="proj2-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
        <div className="project3">
          <h3>Project 3 Title</h3>
          <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them.</p>
          <img className="proj3-img" src="https://dummyimage.com/300x200/000000/0011ff&text=Place+Holder" alt="screen shot of <project name>"></img>
        </div>
    </div>
  );
}