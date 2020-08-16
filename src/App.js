import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Wave } from 'react-animated-text';

const MyName = () => (
  <Wave 
  text="Aaron Garner"
  effect="verticalFadeIn"
  effectChange={1.0}
  delay={3.0}
  // iterations={1}
  />
);

const BrandStatement = () => (
  <Wave 
  text="Full Stack Web Developer with experience programming building automation systems and creating graphical user interfaces for those systems that recently earned a certificate of completion from UC Berkeley Extension for their Full-Stack Coding Bootcamp. Skills include JavaScript, JQuery, HTML, CSS, MySQL, MongoDB, Express, React, and Node (MERN stack). Extensive customer service and project management experience gives me different perspectives when working toward solutions to problems. Strengths include strong attention to detail, works great individually or collaboratively with teammates and end-users. Adept problem-solver and quick learner, eager to join a team and share my experience and skills to bring my perspective and talents to the table. "
  effect="verticalFadeIn"
  effectChange={1.0}
  effectDuration={0.001}
  iterations={1}
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
        <MyName />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <BrandStatement />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  };
}

export default App;
