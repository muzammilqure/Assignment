import React from "react";
import "./App.css";
// import Button from "./components/Button";
import Dashboard from "./sections/Dashboard";
import Tabs from "./components/TabComponent/Tabs";

const App = () => {
  return (
    <div className="app">
      <Dashboard />
      <Tabs />
      {/* <Button title={"yes"} /> */}
    </div>
  );
};

export default App;
