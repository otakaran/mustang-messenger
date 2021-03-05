import { Link, useLocation } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Button from "react-bootstrap/Button";

const SignupLogin = () => {
  return (
    <div className="signup-login">
      <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
    </div>
  );
};

const Header = ({ userID, handleSignout }) => {
  const location = useLocation();
  let bannerComponent;

  const setHeaderText = () => {
    if (location.pathname === "/signup") {
      return "Sign up";
    } else if (location.pathname === "/login") {
      return "Log in";
    } else {
      return "Mustang Messenger";
    }
  };

  if(userID == "") {
    bannerComponent = 
      <Link to="/">
        <img src={banner} id="banner" alt="Mustang Messenger banner" />
      </Link>
    ;
  }
  else {
    bannerComponent = 
      <img src={banner} id="banner" alt="Mustang Messenger banner" />
    ;
  }

  return (
    <div class="header">
      <div class="header-left">
        {bannerComponent}
      </div>
      <div class="header-middle">{setHeaderText()}</div>
      <div class="header-right" id="signup-login">
        {userID === "" ? (
          <SignupLogin />
        ) : (
          <div className="signedin-logout">
            {userID}{" "}
            <Button
              variant="success"
              type="submit"
              value="Submit"
              onClick={handleSignout}
            >
              <Link className="signout-button" to="/">Sign out</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
