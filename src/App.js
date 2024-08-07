import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import Tombol from "./components/Tombol";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-500 font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-500 font-bold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/tombol" className="text-blue-500 font-bold">
                  Tombol
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tombol" element={<Tombol />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
