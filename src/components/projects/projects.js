import React from "react";
import "./style.css";



export default function bottomLinks(props) {
  

  // Do I want to put the news scraping project on instead of community first? Or should I polish up Trek and put that on there?

  return (
    <div className="projects">
        <div className="project1">
          <div className="proj1-text">
            <h3>Resource Center</h3>
            <p>Co-created with a group of three other developers, Resource Center is a MERN stack app that allows companies to store useful links, information, and notes with quick and easy access. With a mobile responsive design, the resouce center works great on a computer or mobile device.</p>
            <p>Thechnologies Used: MongoDB, Express, React, Node, Mongoose, React-Router-Dom, Bcrypt, Axios, JQuery, React-Bootstrap, CSS3, HTML5/JSX.</p>
            <p>My contributions to this project largely include visual styling of the app (main page layout, icons, navbar, buttons etc.), API requests via Axios and parsing of data returned, mobile responsiveness, and assisted with user login/authentication.</p>
            <p>
              <a href="https://serene-kobuk-valley-06720.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Sight</a>
            </p>
            <br />
          </div>
          <a href="https://serene-kobuk-valley-06720.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="proj1-img" src="./images/resource_pic.png" alt="screen shot of Resource Center web app"></img>
          </a>
        </div>
        <br />
        <hr className="hr-short" />
        <div className="project2">
          <div className="proj2-text">
            <h3>Community First</h3>
            <p>Co-created with three other developers, our Community First website provides an online forum to post community service events. The home page displays all community events. Clicking on one event will display information about that event. From the home page, a user can log in and create an event. A SQL database stores user and event information.</p>
            <p>My contributions to this project were mostly handling the front end javasctipt logic for CRUD calls via AJAX and Handlebars structure.</p>
            <p>Technologies used: Node, Express, Express Handlebars, Javascript, JQuery, HTML5, CSS3, Bcrypt, Cookie-parser, Sequelize, Mysql2, ESLint, Travis CI, Dotenv, Mocha, and Chai.</p>
            <p>
              <a href="https://communityfirst.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Sight</a>
            </p>
          </div>
          <a href="https://communityfirst.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="proj2-img" src="./images/community_pic.png" alt="screen shot of Comunnity First web app"></img>
          </a>
        </div>
        <br />
        <hr className="hr-short" />
        <div className="project3">
          <div className="proj3-text">
            <h3>Google Book Search</h3>
            <p>The description of the project will go here. Not too much text but enough to explain the project and some of the tools/technologies used and my contributions to them. GOOGLE BOOK SEARCH</p>
          </div>
          <a href="https://ag-google-books-search.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="proj3-img" src="./images/book-search_pic.png" alt="screen shot of <project name>"></img>
          </a>
        </div>
    </div>
  );
}