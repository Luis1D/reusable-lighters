import React from 'react';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="text-container">
                <h1>Reusable Lighters</h1>
                <h2>No more needing to replace lighters every week. These lighters you can reuse.</h2>
                <button>Shop</button>
            </div>
            {/* <div className="img-container">
                <img 
                    src='https://www.dropbox.com/s/zn1bn7okco599j1/lighter-nobg.png?raw=1'
                    alt="lighter"
                    className="lighter"
                />
                <img 
                    src='https://www.dropbox.com/s/8avnxi4pj78lacp/second-lighter.png?raw=1'
                    alt="lighter"
                    className="lighter second-lighter"
                />
                <img 
                    src='https://www.dropbox.com/s/zn1bn7okco599j1/lighter-nobg.png?raw=1'
                    alt="lighter"
                    className="lighter"
                />
            </div> */}
        </div>
    )
}

export default Banner;