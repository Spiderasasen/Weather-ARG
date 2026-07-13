import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"
import Weather_Prediction from "../components/Weather_Prediction"
import "../styles/main.css"

function Home() {
    tab_name("Home");

    return (
        <div>
            <Header />
            <main>
                <Weather_Prediction />
            </main>
            <Footer />
        </div>
    )
}
export default Home;
