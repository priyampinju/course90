import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/NavbarNoLogin";
import SignUp from "./pages/signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
