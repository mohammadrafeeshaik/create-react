import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [login, setLogin] = useState("Login");

  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <header>
      <div className="logo">LOGO</div>
      <ul>
        <li>Online Status: {onlineStatus ? "✅" : "⛔"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <button
            className={login === "Login" ? "btn-login" : "btn-logout"}
            onClick={handleLogin}
          >
            {login}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
