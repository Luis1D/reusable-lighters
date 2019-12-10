import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <h1>ReusableLighters</h1>
            <hr className="header-line" />
            <nav className="nav-menu">
                <ul>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Shop</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;