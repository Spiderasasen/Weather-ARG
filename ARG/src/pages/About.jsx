import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"
import "../styles/about.css"

function About() {
    tab_name("About Us");

    return (
        <div>
            <Header/>
            <main>
                <div className="about-us-container">
                    <h1>About Us</h1>
                    <p className="about-us-text">
                        My name is Dale Harrow, your local weather man.
                        I'm here to provide you with the local weather forecast.
                        I'm passionate about meteorology and enjoy sharing my knowledge with others.
                    </p>
                    <p className="about-us-text">
                        Me and my team of other dedicated professionals are here to make your life easier for you.
                        We strive to provide accurate and reliable weather information to help you plan your day.
                        Whether you're planning a vacation, a business trip, or simply want to stay informed about the weather,
                        we're here to help.
                    </p>
                    <p className="about-us-text">
                        Now, either you fallow through with the weather forecast we give you, or fallow your gut, is up to you.
                        But we recommend to follow our weather forecast for the best results.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
export default About;
