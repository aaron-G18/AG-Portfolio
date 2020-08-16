import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Wave } from 'react-animated-text';
import BrandStatement from "./components/brandStatement/brandStatement";

const MyName = () => (
  <Wave 
  text="Aaron Garner"
  effect="verticalFadeIn"
  effectChange={1.0}
  delay={3.0}
  // iterations={1}
  />
);


class App extends React.Component {
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
