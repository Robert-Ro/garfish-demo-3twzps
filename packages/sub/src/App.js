import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { getWeekNumber } from "@liutsing/utils";

const App = ({ props }) => {
  return (
    <BrowserRouter>
      <div>
        <h1>Sub App Test App</h1>
        <div>Current Week No.{getWeekNumber()}</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
