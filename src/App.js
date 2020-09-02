import React, { Component } from 'react';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import MyName from "./components/myName/myName";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { DiJsBadge, DiHtml5, DiReact, DiCss3, DiMongodb, DiJqueryLogo, DiMysql, DiNodejsSmall } from 'react-icons/di';
import BottomLinks from "./components/bottomLinks/bottomLinks";
import FrontPage from "./components/frontPage/frontPage";
import Project from "./components/projects/projects";
import ReactTooltip from 'react-tooltip';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  };

  componentDidMount() {
   
  }

  // Start with name and animation, then transition to the main page. list two to three projects with bio on the side column.

  // Icons should have tooltip to say what they are.


  render() {
    return(
    <div className="App">
      <header className="App-header">
        {/* <AiOutlineArrowLeft className="inline-block" size="3em" />
        <AiOutlineArrowRight className="inline-block" size="3em" />
        <AiOutlineCaretLeft className="inline-block" size="3em" />
        <AiOutlineCaretRight className="inline-block" size="3em" />
        
        <h1><MyName /></h1>
        <hr />
        <BrandStatement /> */}
        <FrontPage />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Project />
          <div data-tip="JavaScript" className="inline-block">
            <DiJsBadge data-tip="JavaScript" className="inline-block App-logo" size="3em" />
          </div>
          
          <div className="inline-block">
            <DiJqueryLogo className="inline-block App-logo" size="3em" />
          </div>
        <DiHtml5 className="inline-block App-logo" size="3em" />
        <DiCss3 className="inline-block App-logo" size="3em" />
        <DiReact className="inline-block App-logo" size="3em" />
        <DiMongodb className="inline-block App-logo" size="3em" />
        <DiMysql className="inline-block App-logo" size="3em" />
        <div data-tip="NodeJS">
        <DiNodejsSmall className="inline-block App-logo" size="3em" />
        </div>
        {/* NODE.js */}
        <p>
          links for pages will go here.
        </p>
        </div>
        <BottomLinks />
        <ReactTooltip place="top" type="dark" effect="float"/>
      </header>
    </div>
    );
  };
}

export default App;
