import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IconName } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"; 
const Afterdctrnav = ({name}) => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("dctr");
        navigate("/login")
    }
  return (
    <div>
          <div className="navbar">
      {/* <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div> */}
        <section>
        <nav className="nav__container">
        <div className="nav__logo">YSS<span>Dispensary</span></div>
        <ul className="nav__links">
        <li className="link"><a href="/logindoctor">All Appointment</a></li>
        <li className="link"><a href="/Videoc">Call Doctor</a></li>
        <CgProfile /><span>{name}</span>
        </ul>
        <button id="btn1" onClick={handleLogout}>Logout</button>
      </nav>
      </section>
    </div>
    </div>
  )
}

export default Afterdctrnav
