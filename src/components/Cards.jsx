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
      <div className="cards">
        {bottles.map((bottle) => (
          <Card key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </>
  );
}
