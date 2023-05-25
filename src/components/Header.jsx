import React from 'react';
import CarouselComp from './CarouselComp';
import TextBody from './TextBody';

const Header = () => {
    return (
        <div className='w-[90%] mt-20 md:w-[60%] my-0 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='md:flex justify-between items-center'>

                    {/* PurrWeb logo */}
                    <img src="/images/purrlogo.jpg" alt="PurrWeb logo" className='w-[50px] rounded-full' /> &nbsp; &nbsp;

                    {/* Description */}
                    <p>Online Library App<br />
                        Purrweb UI/UX Agency • Follow • <a href="#" className='text-rose-600'>Hire Us</a>
                    </p>
                </div>

                {/* Save and Like buttons */}
                <div className='hidden md:flex'>

                    <button class=" text-gray-500 font-bold py-2 px-4 rounded ">
                        Save
                    </button>
                    &nbsp;
                    <button class=" bg-rose-500 text-white font-bold py-2 px-4 rounded-lg">
                        Like
                    </button>
                </div>
            </div>
            {/* Image Carousel */}
            <div>
                <CarouselComp />
            </div>

            {/* Text Description of Purrweb */}
            <div>
                <TextBody />
            </div>

            {/* <SideBar/> */}
        </div>
    );
};

export default Header;