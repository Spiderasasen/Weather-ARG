import {NavLink} from "react-router-dom"
import "../styles/header.css"

function Header() {
    return (
        <header>
            <h1>North Carolina Weather Station</h1>
            <nav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/join">Join Us</NavLink>
                </li>
            </nav>
        </header>
    );
}
export default Header;