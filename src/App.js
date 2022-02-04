import React from "react";

import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">Toggle</div>
        <Toggle />
      </div>

      <div className="container">
        <div className="title">Modal</div>
        <Modal />
      </div>

      <div className="container">
        <div className="title">Tab</div>
        <Tab />
      </div>

      <div className="container">
        <div className="title">Tag</div>
        <Tag />
      </div>
    </div>
  );
}

export default App;
