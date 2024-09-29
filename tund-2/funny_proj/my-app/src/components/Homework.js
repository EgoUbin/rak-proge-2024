import React from "react";
import { useState } from "react";

const Homework = () => {
  const [name, setName] = useState("Egon Ubina");

  return <CoolProp name={name} />;
};

const CoolProp = ({ name }) => {
  return <div>{name}</div>;
};

export default Homework;
