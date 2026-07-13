import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"

function About() {
    tab_name("About Us");

    return (
        <div>
            <Header/>
            <h1>About</h1>
            <Footer/>
        </div>
    )
}
export default About;
