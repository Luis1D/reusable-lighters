import React from 'react';

const Header = () => {
    // const [menu, setMenu] = useState(false);
    // const [loaded, setLoaded] = useState(false);

    // const menuTrigger = () => {
    //     setMenu(!menu);
    // }
    // const handleOnLoad = () => {
    //     setLoaded(true);
    // }
    // const handleOnError = () => {
    //     console.log("Network Connection Error. Could not retrieve images")
    // }

    return (
        <div className="Header">
            <div className="main-header">
                <div className="container">
                    <img
                        src="https://www.dropbox.com/s/thopqecn0v79681/bolt.svg?raw=1"
                        alt="logo"
                        className="logo"
                        // onLoad={ handleOnLoad }
                        // onError={ handleOnError }
                    />       
                    {/* Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <h1 className="logo-title">Reusable<br/>Lighters</h1>
                </div>
                {/* <div className="container">
                    <img
                        src="https://www.dropbox.com/s/yzy5ee9sfjki4ye/menu.svg?raw=1"
                        alt="menu"
                        className="menu-icon"
                        onClick={ menuTrigger }
                    />
                </div> */}
                <a href="#Products">
                    <img 
                        src={ require('../assets/down-arrow.svg') }
                        alt="down arrow"
                        className="down-arrow"
                    />
                </a>
            </div>
            {/* <div className="menu-container">
                <div className={ menu ? "menu-active" : "menu-hidden" }>
                <h1 onClick={ menuTrigger }>X</h1>
                    <ul>
                        <li>Contact</li>
                        <form className="contact-form">
                            <label>Email</label>
                            <input placeholder="email" type="email" />
                            <label>Message</label>
                            <textarea placeholder="Enter message" type="text" />
                            <button>Submit</button>
                        </form>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default Header;