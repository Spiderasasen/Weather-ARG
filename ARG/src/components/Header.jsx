import {NavLink} from "react-router-dom"
import "../styles/header.css"

function Header() {
    return (
        <header>
            <h1>North Carolina Weather Station</h1>
            <nav>
                <li>
                    <NavLink to="/" className="btn">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/faq" className="btn">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="btn">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/join" className="btn">Join Us</NavLink>
                </li>
            </nav>
        </header>
    );
}
export default Header;