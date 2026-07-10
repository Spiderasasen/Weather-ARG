import Header from "../components/Header"
import {tab_name} from "../util/tab_name"

function Home() {
    tab_name("Home");

    return (
        <div>
            <Header />
        </div>
    )
}
export default Home;