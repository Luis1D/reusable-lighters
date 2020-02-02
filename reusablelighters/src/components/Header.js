import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <img
                src={ require('../assets/bolt.svg') }
                alt="logo"
            />
            {/* Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            <h1>Reusable Lighters</h1>
        </div>
    )
}

export default Header;