import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
    return (
        <div className='mt-5'>
            <div className="carousel-wrapper">
                <Carousel infiniteLoop autoPlay autoFocus stopOnHover={false}>
                    <div>
                        <img src="/images/1.png" />
                    </div>
                    <div>
                        <img src="/images/2.png" />
                    </div>
                    <div>
                        <img src="/images/3.png" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComp;