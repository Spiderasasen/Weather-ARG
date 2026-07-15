import ARG_Header from "../../components/ARG_components/ARG_Header.jsx";
import "../../styles/main.css"
import ARG_Footer from "../../components/ARG_components/ARG_Footer.jsx";
import {tab_name} from "../../util/tab_name.ts";

function ARG_Home() {
    tab_name("Assignment")

    return(
        <div  className="ARG_main">
            <ARG_Header />
            <main>
                <h1>Assignment:</h1>
                <ul>
                    <li>You will be tasked to answer the questions of people.</li>
                    <li>You must lie if you want to live and see the people you love.</li>
                    <li>You will be given a list of entities for each 15 questions you answered wrong to them.</li>
                    <li>The reason you need these entities is because you need to know what to lie about.</li>
                    <ul>
                        <li>If you didnt know what your answer you might be saving lives</li>
                        <li>And we all know we dont want that</li>
                    </ul>
                    <li>You will be receiving emails that will let you know if you answered a question wrong</li>
                    <li>You can only answer truthfully 3 times</li>
                    <li>If you tell the truth to anyone, you will be killed</li>
                </ul>
                <p>We will be watching you</p>
            </main>
            <ARG_Footer />
        </div>
    );
}
export default ARG_Home;