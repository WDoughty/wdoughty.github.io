import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from "./components/Resume/resume";
import NavBar from "./components/Navigation/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Resume />

        
      </header>
    </div>
  );
}

export default App;
