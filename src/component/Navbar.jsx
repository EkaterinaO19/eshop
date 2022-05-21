import React from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
    <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg py-3">
        <div className="container flex">
            <NavLink 
                className="fa navbar-brand fw-bold fs-2" 
                to="/">
                High Fashion
            </NavLink>
            <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
            >
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="fa nav-link active" aria-current="page" to="/home">
                        Home
                    </NavLink>
                    </li> 

                    <li className="nav-item">
                    <NavLink className="fa nav-link active" to="/products">
                        Prooducts
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="fa nav-link active" to="/about">
                        About
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="fa nav-link active" to="/contact">
                        Contact
                    </NavLink>
                    </li>
                </ul>
                <div className="d-grid gap-3 d-flex justify-content-md-end">
                <NavLink to='/login' className="fa btn btn-outline-light me-md-2">
                    Sign In
                </NavLink>
                <NavLink to='/register' className="fa btn btn-outline-light me-md-2">
                    Register
                </NavLink>
                <NavLink to='/cart' className="fa btn btn-outline-light me-md-2">
                    Cart (0) 
                </NavLink>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;