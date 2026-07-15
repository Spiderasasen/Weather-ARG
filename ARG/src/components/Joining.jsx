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

    //sign up handler
    const handleSignUp = () => {
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        localStorage.setItem("arg_username", username);
        localStorage.setItem("arg_password", password);
        setLogin(true);
        setAccount(true);
    }

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
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSignIn}>Sign In</button>
                    <button onClick={() => setAccount(false)}>Sign Up</button>
                </div>) :
                (<div className="no-account">
                    <h3>Don't have an account? Please Sign Up!</h3>
                    <div>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <button onClick={() => setAccount(true)}>Sign In</button>
                </div>)
            }
        </div>
    );
}
export default Joining;