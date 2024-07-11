import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboaed";
import Contact from "./Components/Contact";
import FormComponent from "./Components/FormComponent";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      {/* <Link to="/Dashboard">Dashboard</Link>
      <br></br>
      <Link to="/Home">Home</Link>
      <br></br>
      <Link to="/Contact">Contact</Link>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes> */}
      {/* <FormComponent /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
