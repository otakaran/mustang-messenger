import { Link, useHistory, useLocation } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "./fire/AuthContext";
import { useState } from "react";

const SignupLogin = () => {
  return (
    <div className="signup-login">
      <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
    </div>
  );
};

const BannerComponent = () => {
  return (
    <Link to="/">
      <img src={banner} id="banner" alt="Mustang Messenger banner" />
    </Link>
  );
}

const Header = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const setHeaderText = () => {
    if (location.pathname === "/signup") {
      return "Sign up";
    } else if (location.pathname === "/login") {
      return "Log in";
    } else {
      return "Mustang Messenger";
    }
  };

  async function handleSignout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div class="header">
      <div class="header-left">
        {currentUser ? 
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
          :
          <BannerComponent />
        }
      </div>
      <div className="header-middle">{setHeaderText()}</div>
      <div className="header-right" id="signup-login">
        {currentUser ?
          <div className="signedin-logout">
            {currentUser.email}{" "}
            <Button
              variant="success"
              type="submit"
              value="Submit"
              onClick={handleSignout}
            >
              Sign out
            </Button>
          </div>
          :
          <SignupLogin />
        }
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </div>
  );
};

export default Header;
