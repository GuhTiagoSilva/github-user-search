import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-4">
                <Link to="/">
                    <h4 className="nav-title">Bootcamp DevSuperior</h4>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;