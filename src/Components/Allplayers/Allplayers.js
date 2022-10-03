import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Allplayers.css";
const Allplayers = ({ players, setCart, cart }) => {
  return (
    <div>
      <div className="cart-container">
        {players?.map((player) => (
          <SinglePlayer
            player={player}
            key={player?.idPlayer}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Allplayers;
