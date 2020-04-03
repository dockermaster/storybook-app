import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Button from './components/button/button';
import Address from './components/address/address';
import User from './components/connectedComponents/user/user';
import { statement } from '@babel/template';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {hideNav:{}};
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
   }
    
   resize() {
      let currentHideNav = (window.innerWidth <= 760);
      if (currentHideNav !== this.state.hideNav) {
          this.setState({hideNav: currentHideNav});
      }
   }

  render() {
    let header;
    if (!this.state.hideNav) {
      header = <h1 className="App_title">Test application in React</h1>
    }

    return (
      <div className="App">
        <header className="App-header">
          {header}
        </header>
        <p className="App_intro">
        Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="I am button component rendered for demo" />
        <User />
        <Address />
      </div>
    );
  }
}

export default App;
