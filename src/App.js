import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [text, setText] = useState("light");
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#212528";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert="In this site you can use textutils" />
      <div className="container">
            <Textform heading="Enter Your Text Here...." mode={darkMode} />
          

        {/*<About/>*/}
      </div>
    </>
  );
}

export default App;
