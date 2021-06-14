import React from "react";
import Home from './pages/Home';
import Jumbotron from "./components/Jumbotron";
import './css/App.css';


function App() {
  return (
    <div>
      <Jumbotron/>
      <Home/>
    </div>
  );
}

export default App;