import { Link } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";

function Header() {
  return (
    <div class="header">
      <div class="header-left">
        <Link to="/">
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
        </Link>
      </div>
      <div class="header-middle">Welcome</div>
      <div class="header-right">
        <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Header;
