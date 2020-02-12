import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = () => {
    const [loaded, setLoaded] = useState(false);

    const handleOnLoad = () => {
        setLoaded(true);
    }

    const handleOnError = () => {
        console.log("Network Connection Error. Could not retrieve images")
    }

    return (
        <div>
            {
                loaded ?  null : <div className="carousel-loading"></div>
            }
            <Slider autoplay arrows={false} className="carousel">
                    <div>
                        <img
                            src="https://www.dropbox.com/s/l35njee7ziq642i/img-1.png?raw=1"
                            alt="banner one"
                            className="img"
                            onLoad={ handleOnLoad }
                            onError={ handleOnError }
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.dropbox.com/s/836oxxpnmzfv0ov/img-2.png?raw=1"
                            alt="banner two"
                            className="img"
                            onLoad={ handleOnLoad }
                            onError={ handleOnError }
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.dropbox.com/s/w2hqz7ol0ucg7ra/img-3.png?raw=1"
                            alt="banner three"
                            className="img"
                            onLoad={ handleOnLoad }
                            onError={ handleOnError }
                        />
                    </div>
            </Slider>
        </div>
    )
}

export default Carousel;