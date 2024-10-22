import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <h2>BottleHut</h2>
        <div className="icons">
          <AiOutlineShoppingCart />
          <FaRegCircleUser />
        </div>
      </div>
    </>
  );
}
