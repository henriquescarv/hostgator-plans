import React from "react";
import './globals/global.css'
import Header from "./components/Header/Header";
import Infos from "./components/Infos/Infos";
import Values from "./components/Values/Values";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Infos/>
      <Values/>
    </div>
  );
}