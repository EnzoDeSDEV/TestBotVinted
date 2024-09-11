import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotSettings from "./View/BotSettings";
import Login from "./View/Login";
import Register from "./View/Register";
import Search from "./View/Search";
import NavBar from "./Components/Navbar";

function App() {
  return (
    
    <Router>
    <NavBar />
      <Routes>
        <Route path="/bot-settings" element={<BotSettings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
