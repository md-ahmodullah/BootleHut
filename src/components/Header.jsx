import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo-brand">
          <img src="../../public/logo.jpg" alt="" className="logo" />
          <h2 className="brand">Bottle Hut</h2>
        </div>
        <div className="icons">
          <div className="icon-div">
            <AiOutlineShoppingCart />
            <span>
              <sup className="span-header">{0}</sup>
            </span>
          </div>
          <FaRegCircleUser />
        </div>
      </div>
    </>
  );
}
