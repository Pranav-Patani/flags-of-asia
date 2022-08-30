import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const el = document.getElementById(`root`);

const root = ReactDOM.createRoot(el);

//-----------------------------------------

function App() {
  return (
    <div className="App">
      <h1>Flags of Asia</h1>
    </div>
  );
}

//-------------------

root.render(<App />);
