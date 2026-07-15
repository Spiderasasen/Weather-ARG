import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../styles/join.css";

function Joining() {
    //useState
    const [account, setAccount] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [login, setLogin] = useState(false);

    //useEffect
    useEffect(() => {
        const savedUser = localStorage.getItem("arg_username");
        const savedPass = localStorage.getItem("arg_password");

        //auto login if credentials exist
        if(savedUser && savedPass){
            setUsername(savedUser);
            setPassword(savedPass);
            setLogin(true);
        }
    });

    //sign in handler
    const handleSignIn = () => {
        const savedUser = localStorage.getItem("arg_username");
        const savedPass = localStorage.getItem("arg_password");

        if (username === savedUser && password === savedPass) {
            setLogin(true);
        }
        else{
            alert("Invalid username or password");
        }
    }

    if(login){
        return(
            <div className="login-container">
                <h3>Welcome back {username}!</h3>
                <NavLink to="/ARG">Please enter the portal here!</NavLink>
            </div>
        );
    }

    return(
        <div className="joining-container">
            {account ?
                (<div className="has-acount">
                    <h3>Please sign in...</h3>
                    <div>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Sign In</button>
                    <button onClick={() => setAccount(false)}>Sign Up</button>
                </div>) :
                (<div className="no-account">
                    <h3>Don't have an account? Please Sign Up!</h3>
                    <div>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <button>Sign Up</button>
                    <button onClick={() => setAccount(true)}>Sign In</button>
                </div>)
            }
        </div>
    );
}
export default Joining;