import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'

function Navbar() {
    return (
        <div className="navigation-bar container-fluid sticky-top">
            <div className="row">
                <div className="col-10 mx-auto">

                <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand logo" to="/react-creative"> <img src={logo} alt="logo"/> </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/react-creative" activeClassName="active_menu">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/react-creative/about" activeClassName="active_menu">About</NavLink>
              </li>     

              <li className="nav-item">
                <NavLink exact className="nav-link" to="/react-creative/service" activeClassName="active_menu">Service</NavLink>
              </li>    

              <li className="nav-item">
                <NavLink exact className="nav-link" to="/react-creative/contact" activeClassName="active_menu">Contact</NavLink>
              </li>                  
            </ul>
          </div>
      </nav>

                </div>
            </div>
        </div>

    )
}

export default Navbar
