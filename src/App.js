import React, { useState, useEffect } from "react";
import api from './services/api'
import styles from './globals/global.css'
import Header from "./components/Header/Header";
import Infos from "./components/Infos/Infos";
import Values from "./components/Values/Values";

export default function App() {
  const [listPrices, setListPrices] = useState([]);

  useEffect(()=> {
    api
      .get('') 
      .then(({data}) => {setListPrices(data.shared.products)})
      .catch((err) => {console.error('Error! ' + err)})
  });

  return (
    <div className="App">
      <Header/>
      <Infos/>
      <Values/>
    </div>
  );
}