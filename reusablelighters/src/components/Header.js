import React, { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const menuTrigger = () => {
        setMenu(!menu);
    }
    return (
        <div className="Header">
            <div className="main-header">
                <div className="container">
                    <img
                        src={ require('../assets/bolt.svg') }
                        alt="logo"
                        className="logo"
                    />
                    {/* Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <h1 className="logo-title">Reusable Lighters</h1>
                </div>
                <div className="container">
                    <img
                        src={ require('../assets/menu.svg') }
                        alt="menu"
                        className="menu-icon"
                        onClick={ menuTrigger }
                    />
                </div>
            </div>
            <div className="menu-container">
                <div className={ menu ? "menu-active" : "menu-hidden" }>
                <h1 onClick={ menuTrigger }>X</h1>
                    <ul>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;