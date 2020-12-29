import React, { Component } from 'react';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import { DiJsBadge, DiHtml5, DiReact, DiCss3, DiMongodb, DiJqueryLogo, DiMysql, DiNodejsSmall } from 'react-icons/di';
import BottomLinks from "./components/bottomLinks/bottomLinks";
import Sidebar from "./components/sideBar/sideBar";
import Projects from "./components/projects/projects";
import ReactTooltip from 'react-tooltip';



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
    };
  };

  componentDidMount() {
   
  }


  render() {
    return(
    <div className="App">
        <Sidebar />
        <div className="content">
          <BrandStatement />
          <br/>
          <hr/>
          <div data-tip="JavaScript" className="inline-block">
            <DiJsBadge data-tip="JavaScript" className="logo" />
          </div>
          <div data-tip="JQuery" className="inline-block">
            <DiJqueryLogo className="logo" />
          </div>
          <div data-tip="HTML5" className="inline-block">
            <DiHtml5 className="logo" />
          </div>
          <div data-tip="CSS3" className="inline-block">
            <DiCss3 className="logo" />
          </div>
          <div data-tip="ReactJS" className="inline-block">
            <DiReact className="logo" />
          </div>
          <div data-tip="MongoDB" className="inline-block">
            <DiMongodb className="logo" />
          </div>
          <div data-tip="MySQL" className="inline-block">
            <DiMysql className="logo" />
          </div>
          <div data-tip="NodeJS" className="inline-block">
            <DiNodejsSmall className="logo" />
          </div>
          <hr/>
          <Projects />
          <hr className="hr-wide" />
          <BottomLinks />
        </div>
        <ReactTooltip place="top" type="dark" effect="float"/>
    </div>
    );
  };
}

export default App;
