import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
    <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg py-3">
        <div className="container flex">
            <div className="fa navbar-brand fw-bold fs-2">High Fashion</div>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="fa nav-link active" aria-current="page" to="/">
                        Home
                    </Link>
                    </li> 

                    <li className="nav-item">
                    <Link className="fa nav-link active" to="/products">
                        Prooducts
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="fa nav-link active" to="/about">
                        About
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="fa nav-link active" to="/contact">
                        Contact
                    </Link>
                    </li>
                </ul>
                <div className="d-grid gap-3 d-flex justify-content-md-end">
                <Link to='/login' className="fa btn btn-outline-light me-md-2">
                    Sign In
                </Link>
                <Link to='/register' className="fa btn btn-outline-light me-md-2">
                    Register
                </Link>
                <Link to='/cart' className="fa btn btn-outline-light me-md-2">
                    Cart ({state.length}) 
                </Link>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;