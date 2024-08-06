import { useState } from "react"
import "./LoginSignup.css" 
const LoginSignup = () => {
    const [action,setAction] = useState("Sign up")
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? <div></div>:
                <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder="name"/>
            </div>}
            <div className="input">
                <img src="" alt="" />
                <input type="email" placeholder="email"/>
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="password" placeholder="password"/>
            </div>
            
            {action === "Sign up" ? <div></div>:
            <div className="forgot-password">Forgot password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}>Sign up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() =>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup