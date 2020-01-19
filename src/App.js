import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SlidingBanner from "./components/SlidingBanner";
function App() {
  return (
    <>
      <Sidebar />
      <SlidingBanner />
    </>
  );
}

export default App;
