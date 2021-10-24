import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css'; 
import doit from './doit.jpg'; 

function Header() {

    return (
    <div className="Header">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* </div>img src={doit} /> */}
        <h1>Cal Course Analyzer</h1>
      </header>
    </div >
  );
}

export default Header;
