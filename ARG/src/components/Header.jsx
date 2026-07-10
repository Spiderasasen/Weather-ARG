import {NavLink} from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>North Carolina Weather Station</h1>
            <nav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    FAQ
                </li>
                <li>
                    About us
                </li>
                <li>
                    Join Us
                </li>
            </nav>
        </header>
    );
}
export default Header;