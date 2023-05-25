import React from 'react';
import { GrMail } from 'react-icons/gr';

const BodyFoot = () => {
    return (
        // Text and Hire Us button
        <div className='mt-14 w-[100%] flex flex-col items-center justify-center'>
            <img src="/images/purrlogo.jpg" alt="Purrlogo" className='rounded-full w-[70px]' />
            <h2 className='mt-4 text-xl font-semibold'>Purrweb UI/UX Agency</h2>
            <p className='mt-4'>We Design Mindful Interfaces for Web & Mobile</p>

            <button class=" bg-rose-500 text-white font-bold py-2 px-4 rounded-lg mt-4 flex justify-center items-center">
                <GrMail /> &nbsp;
                Hire Us
            </button>
        </div>
    );
};

export default BodyFoot;