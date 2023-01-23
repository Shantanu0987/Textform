// import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#09352f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "My App-Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "My App-Light Mode";
    }
  };
  return (
    <>
      {/* // <BrowserRouter> */}
      <Navbar
        title="My-app"
        Name="Name"
        AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* // <Routes> */}
      {/* // <Route */}
      {/* {/* exact */}
      {/* path="/textform" */}
      {/* element={ */}
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      />
      {/* } */}
      {/* /> */}
      {/* // <Route exact path="/about" element={<About />} /> */}
      {/* // </Routes> */}
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
