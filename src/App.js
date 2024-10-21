import './App.css';
import React from "react";
import Game from './components/game'
import GameOver from './components/gameOver'
import StartScreen from './components/startScreen'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<StartScreen />} />
      <Route path="/game" element={<Game />} />
      <Route path="/gameOver"element={<GameOver />} />
    </Routes>
    </Router>
  );
}

export default App;
