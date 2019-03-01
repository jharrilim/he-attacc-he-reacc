import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './components/about/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
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
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
