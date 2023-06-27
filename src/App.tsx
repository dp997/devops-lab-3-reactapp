import React from 'react';
import logo from './logo.svg';
import github_mark from './github-mark-white.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is just a sample app to figure out how to host react app on nginx.
          <br></br>
          To get to the actual app written in flask - go <a href="/app">here</a>.
          <br></br>
        </p>
        <p>
          Check out my <a href="https://github.com/dp997">GitHub<img src={github_mark} alt="https://github.com/dp997" height="40" width="40"></img></a>
        </p>
      </header>
    </div>
  );
}

export default App;
