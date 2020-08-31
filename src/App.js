import React, { Component } from 'react';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import MyName from "./components/myName/myName";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { DiJsBadge, DiHtml5, DiReact, DiCss3, DiMongodb, DiJqueryLogo, DiMysql, DiNodejsSmall } from 'react-icons/di';
import BottomLinks from "./components/bottomLinks/bottomLinks";
import FrontPage from "./components/frontPage/frontPage";


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  };

  componentDidMount() {
   
  }

  // start with name and animation, then transition to the main page. list two to three projects with bio on the side column.


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
        <DiJsBadge className="inline-block App-logo" size="3em" />
        <DiJqueryLogo className="inline-block App-logo" size="3em" />
        <DiHtml5 className="inline-block App-logo" size="3em" />
        <DiCss3 className="inline-block App-logo" size="3em" />
        <DiReact className="inline-block App-logo" size="3em" />
        <DiMongodb className="inline-block App-logo" size="3em" />
        <DiMysql className="inline-block App-logo" size="3em" />
        <DiNodejsSmall className="inline-block App-logo" size="3em" />
        
        {/* NODE.js */}
        <p>
          links for pages will go here.
        </p>
        <span>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </span>
        </div>
        <BottomLinks />
        
      </header>
    </div>
    );
  };
}

export default App;
