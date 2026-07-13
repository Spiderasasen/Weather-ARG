import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"

function FAQ() {
    tab_name("FAQ");

    return (
        <div>
            <Header/>
            <h1>FAQ</h1>
            <Footer/>
        </div>
    )
}
export default FAQ;