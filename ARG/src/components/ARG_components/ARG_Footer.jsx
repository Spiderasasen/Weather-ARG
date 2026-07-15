import {NavLink} from "react-router-dom";
import "../../styles/footer.css"

function ARG_Footer() {
    return(
        <footer className="ARG_footer">
            <div className="ARG_footer-container">
                <div className="ARG_questioning_locals">
                    <p>Remember you Assignment is to lie.</p>
                    <NavLink to={"/ARG/questioning_locals"}>Answer the Questions</NavLink>
                </div>
            </div>
        </footer>
    );
}
export default ARG_Footer;
