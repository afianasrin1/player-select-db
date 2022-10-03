import React, { useEffect, useState } from "react";
import Allplayers from "../Allplayers/Allplayers";

import "./Home.css";
const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  return (
    <div>
      <div className="home-container">
        <div className="left-sight">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            type="text"
          />
          <button className="search-btn">Search</button>
          <div className="all-player-container">
            <Allplayers players={players} cart={cart} setCart={setCart} />
          </div>
        </div>
        <div className="right-side">
          <div className="cart-info-container ">
            <p>select player</p>
            <div className="cart-info">
              {cart?.map((player) => (
                <li>{player.strPlayer}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
