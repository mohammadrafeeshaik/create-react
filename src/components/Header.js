import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <header>
      <div className="logo">LOGO</div>
      <ul>
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
          <button onClick={handleLogin}>{login}</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
