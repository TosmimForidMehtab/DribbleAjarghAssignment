import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';

const NavBar = () => {
    return (
        <div className='flex m-6 justify-between'>
            <div className="flex items-center w-[55%] justify-between text-gray-500">

                <BiMenu size={30} cursor='pointer' className='flex md:hidden' />
                {/* <Modal/> */}
                {/* Logo */}
                <img src='/images/image.svg' alt='Logo' />
                {/* Links */}
                <a className='hidden md:flex lg:flex' href="#">Inspiration</a>
                <a className='hidden md:flex lg:flex' href="#">Find Work</a>
                <a className='hidden md:flex lg:flex' href="#">Learn Design</a>
                <a className='hidden md:flex lg:flex' href="#">Go Pro</a>
                <a className='hidden md:flex lg:flex' href="#">Hire Designers</a>
            </div>

            {/* Buttons */}
            <div className="flex items-center w-[18%] md:justify-between justify-end ">
                {/* Search Icon */}
                <FiSearch size={20} className='hidden md:flex lg:flex ' />

                {/* Sign In and Sign Up Button */}
                <button class=" text-gray-500 font-bold py-2 md:px-4 rounded ">
                    Sign In
                </button>

                <button class=" bg-rose-500 text-white font-bold py-2 px-4 rounded-lg hidden md:flex lg:flex">
                    Sign In
                </button>
            </div>


        </div>
    );
};

export default NavBar;