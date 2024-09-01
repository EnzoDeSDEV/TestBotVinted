import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./View/Home";
import About from "./View/Login";
import Contact from "./View/Contact";
import Register from "./View/Register";
import Navbar from './Components/navbar';

function App() {
  return (
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
