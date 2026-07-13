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
/*TODO:
* add a fake weather prediction for the week
*   show the temperature for the week
*   add a chance of rain section
*   add predictions for the next 7 days
*   it will check the month of the user to give the correct nanomoles for the main game
* have a message under the main weather saying that the weather is alright
* add a footer that will only relocate the user to the join us or about us page
* */