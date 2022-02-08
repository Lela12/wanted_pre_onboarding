import React from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete";
import { ClickToEdit } from "./components/ClickToEdit";

import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import Toggle from "./components/Toggle";

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

      <div className="container">
        <div className="title">AutoComplete</div>
        <AutoComplete />
      </div>

      <div className="container">
        <div className="title">ClickToEdit</div>
        <ClickToEdit />
      </div>
    </div>
  );
}

export default App;
