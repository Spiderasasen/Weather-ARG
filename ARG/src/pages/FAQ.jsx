import Header from "../components/Header"
import {tab_name} from "../util/tab_name"
import Footer from "../components/Footer"
import FAQ_data from "../data/FAQ.json"
import "../styles/faq.css"

function FAQ() {
    tab_name("FAQ");

    return (
        <div>
            <Header/>
            <div className="faq">
                <h1>FAQ</h1>
                {FAQ_data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.question}</h2>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
export default FAQ;