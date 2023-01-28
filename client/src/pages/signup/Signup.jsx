import "./signup.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function Signup() {
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[error,setError]=useState(false);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setError(false);
        try{
           
            const res= await axios.post("auth/signup",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }
       catch(err){
         setError(true);
       }

    }
    return (
        <div className="signin">
            <span className="signinTitle">SignUp</span>
            <form action="" className="signinForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text"  placeholder="Enter your username" className="signinInput"
            onChange={e=>setUsername(e.target.value)}
            />
            <label >Email</label>
            <input type="email"  placeholder="Enter your email" className="signinInput"
            onChange={e=>setEmail(e.target.value)}
            />
            <label >Password</label>
            <input type="password" placeholder="Enter your password" className="signinInput"
            onChange={e=>setPassword(e.target.value)}
            />
           <button className="signinbutton" type="submit">SignUp</button>
            </form>
            <button className="loginButton">
            <Link className="link" to="/login">LogIn</Link>
            </button><br />
           {error && <span style={{color:"white"}}>Something went wrong..</span>}
        </div>
    )
}
