import "../styles/main.css";
import React, {useEffect,useState } from "react";
import Header from "../components/Header";
const Axios = require("axios");

const Main = () => {
  const [cryptos, setCryptos] = useState([]);
  const showCryptos = () =>
    Axios.get("http://localhost:3003/cryptoprice").then((response) => {
      let crypto = response.data;
        setCryptos(crypto)
    });
  useEffect(showCryptos,[cryptos])
  return (
    <main className='assets-holder'>
     <Header/>

      {cryptos
        .map((val) => {
          const {
            cryptoName,
            price,
            marketCap,
            volume,
            circulatingSupply,
            graph,
            cryptoLogo,
          } = val;
          return (
            <section id='assets'>
              <img id='logo' src={cryptoLogo} alt='' />
              <h2>{cryptoName}</h2>
              <img src={graph} alt='' />
              <p>MarketCap: {marketCap}</p>
              <p id='price'>Price: {price}</p>
              <p>Volume: {volume}</p>
              <p id='supply'>Circulating Supply: {circulatingSupply}</p>
            </section>
          );
        })
        .slice(0, 10)}
    </main>
  );
};

export default Main;
