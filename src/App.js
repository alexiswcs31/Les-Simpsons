import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      work: false,
    };
  }

  handleClick = () => {
    this.setState({ 
      on: !this.state.on,
      work: !this.state.work,
    });
  };
  render() {
    const light = this.state.on ? 'on' : 'off';
    const working = this.state.work ? 'I\'m working !' : 'I\'m sleeping !'; 
    return (
      <div className="App">       
        <header className="App-header">
        <div className="Lamp container-fluid">
        <p className="paragraphe">{working}</p>
          <img src={logo} className={light} alt="logo" />
          
          <button
              onClick={this.handleClick}
              className={light} > {light.toUpperCase()}
          </button>
        </div>
        </header>
        <Quotes
          
        />
      </div>
    );
  }
}

export default App;
