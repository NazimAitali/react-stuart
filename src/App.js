import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ImgSide from "./components/ImageSide";
import DelivreySide from "./components/DeliverySide";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <DelivreySide />
        <ImgSide />
      </div>
    </div>
  );
}

export default App;
