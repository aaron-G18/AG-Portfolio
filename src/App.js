import React from 'react';
import logo from './logo.svg';
import './App.css';
import posed from 'react-pose';


let MyName = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }




  render() {
    return(
    <div className="App">
      <header className="App-header">
        <MyName 
          className="box" 
          pose={this.state.isVisible ? "visible" : "hidden"}
          >Aaron Garner 
        </MyName>
        <img src={logo} className="App-logo" alt="logo" />
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
