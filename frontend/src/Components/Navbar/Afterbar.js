import React from "react";
import './Navbar.css'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg"; 
function Afterbar({ handleLoginClick ,name}) {
//   const handleClick = () => {
//     handleLoginClick();
//   };
  const navigate = useNavigate()
  const handleLogout = () =>{
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      localStorage.removeItem("dctr");
      navigate("/login")
  }
  return (

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
        <li className="link"><a href="/loginuser">Book</a></li>
        <li className="link"><a href="/Videoc">Call Doctor</a></li>
        <CgProfile /><span>{name}</span>
        </ul>
        <button id="btn1" onClick={handleLogout}>Logout</button>
      </nav>
      </section>
    </div>
  );
}

export default Afterbar;