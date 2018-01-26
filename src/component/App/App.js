import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import { People, Clock, Page } from '../navbar/navbar'

class App extends Component {

  render() {
    return (

      <div className="App">
        <Clock />
        <People name="Paula" isLoggedIn={false}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Page />
      </div>
    );
  }
}

export default App;
