import { Link, useLocation } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Button from "react-bootstrap/Button";
import logoutFirebase from "./fire/logoutFire";

const Header = ({ page, userID }) => {
  const location = useLocation();

  return (
    <div class="header">
      <div class="header-left">
        <Link to="/" onClick={() => this.setCenterText("Welcome!")}>
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
        </Link>
      </div>
      <div class="header-middle">{page}</div>
      <div class="header-right" id="signup-login">
        <Link to="/signup" onClick={() => this.setCenterText("Sign Up")}>
          Sign up
        </Link>{" "}
        or{" "}
        <Link to="/login" onClick={() => this.setCenterText("Log In")}>
          Log in
        </Link>
      </div>
      <div class="header-right" id="logout">
        <div class="userID">{userID}</div>
        <Button
          variant="success"
          type="submit"
          value="Submit"
          onClick={logoutFirebase}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       page: "",
//       userID: "",
//     };
//     window.headerComponent = this;
//   }

//   setCenterText = (text) => {
//     this.setState({
//       page: text,
//     });
//   };

//   displayUserID = (id) => {
//     this.setState({
//       userID: id,
//     });
//   };

//   render() {
//     return (
//       <div class="header">
//         <div class="header-left">
//           <Link to="/" onClick={() => this.setCenterText("Welcome!")}>
//             <img src={banner} id="banner" alt="Mustang Messenger banner" />
//           </Link>
//         </div>
//         <div class="header-middle">{this.state.page}</div>
//         <div class="header-right" id="signup-login">
//           <Link to="/signup" onClick={() => this.setCenterText("Sign Up")}>
//             Sign up
//           </Link>{" "}
//           or{" "}
//           <Link to="/login" onClick={() => this.setCenterText("Log In")}>
//             Log in
//           </Link>
//         </div>
//         <div class="header-right" id="logout">
//           <div class="userID">{this.state.userID}</div>
//           <Button
//             variant="success"
//             type="submit"
//             value="Submit"
//             onClick={logoutFirebase}
//           >
//             Sign out
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

export default Header;
