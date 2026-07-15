import {NavLink} from "react-router-dom";

function ARG_Header(){
    return(
        <header>
            <h1>Employee Username: {localStorage.getItem("arg_username")}</h1>
            <nav>
                <li>
                    {/*This talks on what to do on the "job"*/}
                    <NavLink to="/ARG">Home</NavLink>
                </li>
                <li>
                    {/*this explains each entity, but you have to unlock them by playing the game*/}
                    <NavLink to="/ARG/entities">Entities</NavLink>
                </li>
                <li>
                    {/*This is the main part of the game*/}
                    <NavLink to="/ARG/questioning_locals">Questioning Locals</NavLink>
                </li>
                <li>
                    {/*where the player will be able to receive and at the end email others in the world*/}
                    <NavLink to="/ARG/email">Email</NavLink>
                </li>
            </nav>
        </header>
    );
}
export default ARG_Header;