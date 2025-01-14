import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/* import About from './components/About'; */
import { useState } from 'react';
import React from "react";
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
{/*       <Router>
 */}        <Navbar title="TextUtils" kya="AboutKalp" mode={mode} togglemode={toggle} />
        <div className="container my-3">
{/*           <Routes>
 */}            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={ */}<TextForm heading="Enter text to analyze" />
{/*           </Routes>
 */}        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
