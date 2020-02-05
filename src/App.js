import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Button from './components/button/button';
import User from './components/connectedComponents/user/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App_title">Test application in React</h1>
        </header>
        <p className="App_intro">
        Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="I am button component rendered for demo"/>
        <User />
      </div>
    );
  }
}

export default App;
