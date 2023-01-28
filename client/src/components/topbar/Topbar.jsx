import './topbar.css'
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context/Context';
 

export default function Topbar() {
  
 const {user,dispatch}=useContext(Context);
 const PF= "http://localhost:5000/images/"

 const handleLogout=()=>{
     dispatch({type :"LOGOUT"})
 };

    return (
        <div className='top'>
            <div className="topLeft">
            <a href='https://www.facebook.com/'><i className="topIcon fab fa-facebook"></i></a> 
            <a href='https://twitter.com/'><i className="topIcon fab fa-twitter"></i></a>
        <a href='https://www.instagram.com/'><i className="topIcon fab fa-instagram"></i></a>
        <a href='https://www.linkedin.com/'><i className="topIcon fab fa-linkedin"></i></a>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className='topListItem'><Link className="link" to="/about">ABOUT</Link></li>
                    <li className='topListItem'>
                    <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>{user &&"LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                { user ? 
                (
                     <Link to="/settings">  <img className='topImg' 
                src={PF+user.profilePic}
                 alt="" />
                 </Link>
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                    <Link className="link" to="/signup">SIGNUP</Link>
                    </li>
                    </ul>

                )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}


