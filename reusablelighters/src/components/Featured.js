import React from 'react';

const Featured = () => {
    return (
        <div className="Featured">
            <h3>Featured</h3>
            <hr/>
            <div className="product-container">
                <div className="product">
                    <div className="product-details-container">
                        <div>
                            <h4>Electric Lighter</h4>
                            <span>Customer Rating <br/> 4.5 out of 5</span>
                        </div>
                        <p className="price">$15.99</p>
                        <button>Buy on Amazon</button>

                    </div>
                    <div className="img-container">
                        <img 
                            src='https://www.dropbox.com/s/zn1bn7okco599j1/lighter-nobg.png?raw=1'
                            alt="lighter"
                            className="product-img"
                        />
                    </div>
                </div>
                <div className="product">
                    <div className="product-details-container">
                        <div>
                            <h4>Electric Lighter</h4>
                            <span>Customer Rating <br/> 4.5 out of 5</span>
                        </div>
                        <p className="price">$15.99</p>
                        <button>Buy on Amazon</button>

                    </div>
                    <div className="img-container">
                        <img 
                            src='https://www.dropbox.com/s/8avnxi4pj78lacp/second-lighter.png?raw=1'
                            alt="lighter"
                            className="product-img second-img"
                        />
                    </div>
                </div>
                <div className="product">
                    <div className="product-details-container">
                        <div>
                            <h4>Electric Lighter</h4>
                            <span>Customer Rating <br/> 4.5 out of 5</span>
                        </div>
                        <p className="price">$15.99</p>
                        <button>Buy on Amazon</button>

                    </div>
                    <div className="img-container">
                        <img 
                            src='https://www.dropbox.com/s/zn1bn7okco599j1/lighter-nobg.png?raw=1'
                            alt="lighter"
                            className="product-img"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured;