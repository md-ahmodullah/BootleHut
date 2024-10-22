import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <h2 className="brand">BottleHut</h2>
        <div className="icons">
          <div className="icon-div">
            <AiOutlineShoppingCart />
            <span>
              <sup className="span">{0}</sup>
            </span>
          </div>
          <FaRegCircleUser />
        </div>
      </div>
    </>
  );
}
