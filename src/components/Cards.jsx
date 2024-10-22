import { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";
export default function Cards() {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bootle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <>
      <h2 className="title">Memorable Water Bottle</h2>
      <h2>All Bottles : {bottles.length}</h2>
      <h3>Add to Cart : {0}</h3>
      <div className="cards">
        {bottles.map((bottle) => (
          <Card key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </>
  );
}
