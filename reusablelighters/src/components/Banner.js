import React from 'react';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="text-container">
                <h1>Reusable Lighters</h1>
                <h2>No more needing to replace lighters every week. These lighters you can reuse.</h2>
                <button>Shop</button>
            </div>
            <div className="img-container">
                <img 
                    src='https://www.dropbox.com/s/lcggr9uwwf5ewd0/lighter-nobg.png?raw=1'
                    alt="lighter"
                    className="lighter"
                />
                <img 
                    src='https://www.dropbox.com/s/lcggr9uwwf5ewd0/lighter-nobg.png?raw=1'
                    alt="lighter"
                    className="lighter"
                />
                <img 
                    src='https://www.dropbox.com/s/lcggr9uwwf5ewd0/lighter-nobg.png?raw=1'
                    alt="lighter"
                    className="lighter"
                />
            </div>
        </div>
    )
}

export default Banner;