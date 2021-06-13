import React from "react";
import Home from './pages/Home';
import Table from './components/Table';
import Jumbotron from "./components/Jumbotron";
import './App.css';


function App() {
  return (
    <div className="App">
      <Home/>
      <Jumbotron/>
      <Table/>
    </div>
  );
}

export default App;