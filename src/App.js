import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#0d183d';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TxtAnalyzer - Dark Mode";
      // setInterval(() => {
      //   document.title = "TxtAnalyzer is Amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TxtAnalyzer Now!";
      // }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TxtAnalyzer - Light Mode";
    }
  }

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      {/* <BrowserRouter>
        <Navbar title="TxtAnalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TxtAnalyzer - Word counter | Character counter | Lowercase to uppercase" mode={mode} />} />
        </Routes>
        </div>
      </BrowserRouter> */}

      <Navbar title="TxtAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TxtAnalyzer - Word counter | Character counter | Lowercase to uppercase" mode={mode} />
      </div>
    </>
  );
}

export default App;
