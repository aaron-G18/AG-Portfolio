import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import MyName from "./components/myName/myName";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { DiJsBadge, DiHtml5, DiReact, DiCss3, DiMongodb, DiJqueryLogo, DiMysql} from 'react-icons/di';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  };

  componentDidMount() {
   
  }


  render() {
    return(
    <div className="App">
      <header className="App-header">
        <AiOutlineArrowLeft className="inline-block" />
        <AiOutlineArrowRight className="inline-block" />
        <AiOutlineCaretLeft className="inline-block" />
        <AiOutlineCaretRight className="inline-block" />
        <DiJsBadge className="inline-block App-logo" />
        <DiJqueryLogo className="inline-block App-logo" />
        <DiHtml5 className="inline-block App-logo" />
        <DiCss3 className="inline-block App-logo" />
        <DiReact className="inline-block App-logo" />
        <DiMongodb className="inline-block App-logo" />
        <DiMysql className="inline-block App-logo" />
        <h1><MyName /></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <BrandStatement />
        <div>
          <p>
            links for pages will go here.
          </p>
        </div>
        
      </header>
    </div>
    );
  };
}

export default App;
