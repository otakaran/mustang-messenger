import { Link, useLocation } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Button from "react-bootstrap/Button";
import logoutFirebase from "./fire/logoutFire";

const SignupLogin = () => {
  return (
    <div className="signup-login">
      <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
    </div>
  );
};

const SignedinLogout = ({ userID }) => {
  return (
    <div className="signedin-logout">
      {userID}{" "}
      <Button
        variant="success"
        type="submit"
        value="Submit"
        onClick={logoutFirebase}
      >
        Sign out
      </Button>
    </div>
  );
};

const Header = ({ userID }) => {
  const location = useLocation();

  const setHeaderText = () => {
    if (location.pathname === "/signup") {
      return "Sign up";
    } else if (location.pathname === "/login") {
      return "Log in";
    } else {
      return "Mustang Messenger";
    }
  };

  return (
    <div class="header">
      <div class="header-left">
        <Link to="/">
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
        </Link>
      </div>
      <div class="header-middle">{setHeaderText()}</div>
      <div class="header-right" id="signup-login">
        {userID === "" ? <SignupLogin /> : <SignedinLogout userID={userID} />}
      </div>
    </div>
  );
};

export default Header;
