import {NavLink} from "react-router-dom"
import "../styles/footer.css"

function Footer() {
    return(
      <footer>
          <div className="footer-container">
              <div className="join">
                  <p>Want to be part of this team?</p>
                  <NavLink to="/join">Join Us!</NavLink>
              </div>
              <div className="about">
                  <p>Click here to learn more about us and our amazing staff</p>
                  <NavLink to="/about">About Us</NavLink>
              </div>
          </div>
      </footer>
    );
}
export default Footer;