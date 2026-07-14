import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"
import Joining from "../components/Joining"

function Join() {
    tab_name("Join Us!!!");

    return (
        <div>
            <Header />
            <main>
                <Joining />
            </main>
            <Footer />
        </div>
    )
}
export default Join;