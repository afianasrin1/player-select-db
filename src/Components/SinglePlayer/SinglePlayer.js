import React from "react";
import "./SinglePlayer.css";
const SinglePlayer = ({ player, cart, setCart }) => {
  const { strPlayer, idPlayer, strCutout } = player;
  const handleAddToCart = () => {
    console.log(player);
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
    };

    if (cart?.length) {
      setCart = [...cart, info];
      return;
    } else {
      setCart([setCart]);
      return;
    }
  };
  // console.log(cart);
  return (
    <div className="cart">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      {/* <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 20) : "N/A"}</p> */}
      <button className="cart-btn">Details</button>
      <button onClick={handleAddToCart} className="cart-btn">
        Add to cart
      </button>
      <button className="cart-btn">Bookmarks</button>
    </div>
  );
};

export default SinglePlayer;
