import React from "react";
import "./Navbar.css";
import {NavLink, Link} from "react-router-dom";

export default function Navbar() {
    return(
        <>
        <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            {/* <Link to="/" exact>
              <img src={logo} alt=""/>
            </Link> */}
          </div>
          <ul className="navbar__links">
            <NavLink to="/" exact>
              <li className="navbar__link">Home</li>
            </NavLink>
            <NavLink to="/" exact>
              <li className="navbar__link">About Us</li>
            </NavLink>
            <NavLink to="/" exact>
              <li className="navbar__link">Get In Touch</li>
            </NavLink>
            <Link to="/" exact>
              <li className="navbar__link--login">Login</li>
            </Link>
            <Link to="/" exact>
              <li className="navbar__link--signup">Sign Up</li>
            </Link>
          </ul>
          {/* {sidebar ? (
            <CgClose
              onClick={() => dispatch(hideSidebar())}
              className="navbar__cancel"
            />
          ) : (
            <FiMenu
              onClick={() => dispatch(showSidebar())}
              className="navbar__burger"
            />
          )} */}
        </div>
      </div>
      {/* <Sidebar /> */}
    </>
    )
}