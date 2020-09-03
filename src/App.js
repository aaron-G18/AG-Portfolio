import React, { Component } from 'react';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import MyName from "./components/myName/myName";
import { DiJsBadge, DiHtml5, DiReact, DiCss3, DiMongodb, DiJqueryLogo, DiMysql, DiNodejsSmall } from 'react-icons/di';
import BottomLinks from "./components/bottomLinks/bottomLinks";
import AnimatedName from "./components/animatedName/animatedName";
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
        <AnimatedName />
        <BrandStatement />
        <div>
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
