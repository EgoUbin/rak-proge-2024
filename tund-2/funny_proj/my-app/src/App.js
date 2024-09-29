import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Homework from "./components/Homework";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import Show from "./components/Show";
import Context from "./components/Context";
import RenderHuvid from "./components/Huvid";

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow((prevShow) => !prevShow);

  return (
    <>
      <Context />
      <Show show={show} toggleShow={toggleShow} />
      <PropDrilling />
      <Counter />
      <Homework />
      <RenderHuvid />
      <label for="email">Enter your email:</label>
      <input type="email" id="email" name="email"></input>
    </>
  );
}

export default App;
