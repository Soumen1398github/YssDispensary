import React from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  const navigate = useNavigate()
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
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="#service">Service</a></li>
          <li className="link"><a href="#about">About Us</a></li>
          <li className="link"><a href="/Doctors">Doctors</a></li>
          {/* <li className="link"><a href="/Videoc">Call Doctor</a></li> */}
          {/* <li className="link"><a href="/login">Login</a></li> */}
        </ul>
        <button id="btn1" onClick={()=>navigate("/login")}>Login</button>
      </nav>
      </section>
    </div>
  );
}

export default NavBar;