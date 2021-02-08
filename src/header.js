import './css/header.css';
import banner from './images/mustang-messenger-banner.png';

function Header() {
    return (
        <div class="header">
            <div class="header-left">
                <img src={banner} id="banner"/>
            </div>
            <div class="header-middle">
                Welcome
            </div>
            <div class="header-right">
                <a href="">Sign Up</a> or <a href="">Log In</a>
            </div>
        </div>
    );
}

export default Header;