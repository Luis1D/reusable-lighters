import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = () => {
    return (
        <Slider autoplay arrows={false} className="carousel">
            <div>
                <img
                    src={ require('../assets/carousel-imgs/img-1.png') }
                    alt="banner one"
                    className="img"
                />
            </div>
            <div>
                <img
                    src={ require('../assets/carousel-imgs/img-2.png') }
                    alt="banner one"
                    className="img"
                />
            </div>
            <div>
                <img
                    src={ require('../assets/carousel-imgs/img-3.png') }
                    alt="banner one"
                    className="img"
                />
            </div>
        </Slider>
        // <div className="carousel">
        //     <img
        //         src={ require('../assets/carousel-imgs/img-1.png') }
        //         alt="banner one"
        //     />
        //     <img
        //         src={ require('../assets/carousel-imgs/img-2.png') }
        //         alt="banner one"
        //     />
        //     <img
        //         src={ require('../assets/carousel-imgs/img-3.png') }
        //         alt="banner one"
        //     />
        // </div>
        
    )
}

export default Carousel;