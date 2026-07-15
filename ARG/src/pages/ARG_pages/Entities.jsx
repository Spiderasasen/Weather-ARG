import ARG_Header from "../../components/ARG_components/ARG_Header.jsx";
import ARG_Footer from "../../components/ARG_components/ARG_Footer.jsx";
import Entitie_Card from "../../components/ARG_components/Entitie_Card.jsx";
import "../../styles/main.css"
import {tab_name} from "../../util/tab_name.ts";

function Entities() {
    tab_name("Entities")

    return(
        <div className="ARG_main">
            <ARG_Header />
            <main>
                <Entitie_Card />
            </main>
            <ARG_Footer/>
        </div>
    );
}
export default Entities;