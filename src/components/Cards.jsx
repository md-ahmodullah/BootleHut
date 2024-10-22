import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import Card from "./Card";
import "./Cards.css";

export default function Cards() {
  const [bottles, setBottles] = useState([]);
  const [buyBottles, setBuyBottles] = useState([]);
  useEffect(() => {
    fetch("bootle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleClick = (bottle) => {
    const newBottles = [...buyBottles, bottle];
    setBuyBottles(newBottles);
  };

  const handleDelete = (bottle) => {
    setBuyBottles(buyBottles.filter((b) => b.id !== bottle.id));
  };

  return (
    <>
      <h2 className="title">Memorable Water Bottle</h2>
      <div className="cart-card">
        <h2>All Bottles : {bottles.length}</h2>
        <div className="icon-div">
          <AiOutlineShoppingCart className="cart-icon" />
          <span>
            <sup className="span">{buyBottles.length}</sup>
          </span>
        </div>
      </div>

      {buyBottles.map((bottle) => (
        <div className="buy-bottles" key={bottle.id}>
          <div className="buy-cross">
            <img src={bottle.img} alt={bottle.name} />
            <p>{bottle.name}</p>
            <FaXmark className="cross" onClick={() => handleDelete(bottle)} />
          </div>
        </div>
      ))}
      <div className="cards">
        {bottles.map((bottle) => (
          <Card key={bottle.id} bottle={bottle} onBuyNow={handleClick} />
        ))}
      </div>
    </>
  );
}
