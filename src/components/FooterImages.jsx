import React from 'react';
import ImageCards from './ImageCards';
import VideoCards from './VideoCards';

const FooterImages = () => {
    return (
        <div className='mt-20 md:w-[85%] w-[100%] my-0 mx-auto '>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>More by Purrweb UI/UX Agency</h3>
                <a href="#" className='text-rose-600'>View Profile</a>
            </div>

            {/* Video and Image Cards with their names passed as props */}
            <div className='md:flex justify-between mt-4 flex-none'>
                <VideoCards name={"F1"} />
                <VideoCards name={'F2'} />
                <ImageCards name={"F3"} />
                <ImageCards name={"F4"} />
            </div>

            {/* Some buttons and text which are visible on medium screens and above */}
            <div className='my-32 hidden md:flex lg:flex justify-center items-center'>
                <button class="  text-gray-500 py-2 px-4 rounded-lg">
                    L
                </button>
                <button class="  text-gray-500 py-2 px-4 rounded-lg">
                    F
                </button>
                <p className='text-gray-500 py-2 px-4'>Like</p>
            </div>
        </div>
    );
};

export default FooterImages;