import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import Tombol from "./components/Tombol";
import Home from "./components/Home";
import About from "./components/About";
import { MahasiswaProvider } from "./context/MahasiswaContext";

function App() {
  return (
    <MahasiswaProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/toggle" className="text-blue-500">
                    Toggle Mhs
                  </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/toggle" element={<Tombol />} />
            </Routes>
          </header>
        </div>
      </Router>
    </MahasiswaProvider>
  );
}

export default App;
