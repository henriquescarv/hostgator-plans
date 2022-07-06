import React, { useState, useEffect } from "react";
import api from './services/api'

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
      <h1>Olá, mundo!</h1>
    </div>
  );
}