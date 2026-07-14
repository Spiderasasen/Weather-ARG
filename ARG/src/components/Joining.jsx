import {useState, useEffect} from "react";

function Joining() {
    //useState
    const [account, setAccount] = useState(true);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    //useEffect


    return(
        <div className="joining-container">
            {account ?
                (<div className="has-acount">
                    <h3>Please sign in...</h3>
                    <div>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="" />
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