import React from "react";
import Logo from './logo.svg';
import Home from './pages/Home';
import Table from './components/Table';
import Jumbotron from "./components/Jumbotron";
import './App.css';


function App() {
  return (
    <div className="App">
      <Logo/>
      <Home/>
      <Jumbotron/>
      <Table/>
    </div>
  );
}

export default App;