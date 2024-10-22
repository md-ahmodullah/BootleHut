import "./Card.css";
export default function Card() {
  return (
    <>
      <div className="card">
        <img src="" alt="" />
        <h3>Name : </h3>
        <p>Price : </p>
        <p>Available : </p>

        <div className="card-footer">
          <p>Ratings : </p>
          <p>Seller : </p>
        </div>
        <button className="btn">Buy Now</button>
      </div>
    </>
  );
}
