import React from "react";
import "./App.css";
// import Button from "./components/Button";
import Dashboard from "./sections/Dashboard";
import Tabs from "./components/TabComponent/Tabs";

const App = () => {
  return (
    <>
      <Dashboard />
      <Tabs />
      {/* <Button title={"yes"} /> */}
    </>
  );
};

export default App;
