import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrandStatement from "./components/brandStatement/brandStatement";
import MyName from "./components/myName/myName";



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
