import "./Card.css";
import Five from "./ratings/Five";
import Four from "./ratings/Four";
import Three from "./ratings/Three";
export default function Card({ bottle, onBuyNow }) {
  return (
    <>
      <div className="card">
        <img src={bottle.img} alt={bottle.name} className="card-image" />
        <div></div>
        <h3>{bottle.name}</h3>
        <p>Price : ${bottle.price}</p>
        <p>Available : {bottle.stock}</p>
        <p>Seller : {bottle.seller}</p>
        <div className="card-footer">
          <button className="btn" onClick={() => onBuyNow(bottle)}>
            Buy Now
          </button>
          <span>
            {" "}
            {bottle.ratings === 3 ? (
              <Three />
            ) : bottle.ratings === 4 ? (
              <Four />
            ) : (
              <Five />
            )}
          </span>
        </div>
      </div>
    </>
  );
}
