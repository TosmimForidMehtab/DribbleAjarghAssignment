import React from 'react';
import { CiBasketball } from 'react-icons/ci';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiFillCodeSandboxCircle } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <div className='md:flex flex-none justify-center'>
                <div className='w-[25%] flex flex-col mx-20 md:mb-0 mb-5'>
                    {/* Dribble logo */}
                    <img src="/images/image.svg" alt="Logo" className='w-[80px]' />
                    {/* Description */}
                    <p className='mb-5'>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>

                    {/* Social Links icons */}
                    <div className='flex justify-between'>
                        <CiBasketball size={25} />
                        <AiOutlineTwitter size={25} />
                        <AiFillFacebook size={25} />
                        <AiFillInstagram size={25} />
                        <BsPinterest size={25} />
                    </div>
                </div>

                {/* Services and Links */}
                <div className='md:flex-none flex justify-center md:w-[75%] md:flex-nowrap flex-wrap'>

                    <div className='flex flex-col mr-16 md:ml-0 ml-[25px]'>
                        <h4 className='font-medium'>For Designers</h4>
                        <a href="#">Go Pro</a>
                        <a href="#">Explore Design Work</a>
                        <a href="#">Design Blog</a>
                        <a href="#">Overtime Podcast</a>
                        <a href="#">Playoffs</a>
                        <a href="#">Code of Conduct</a>
                    </div>

                    <div className='flex flex-col mr-20 '>
                        <h4 className='font-medium'>Hire Designers</h4>
                        <a href="#">Post a job opening</a>
                        <a href="#">Post a freelance project</a>
                        <a href="#">Search for designers</a>

                        <h4 className='font-medium mt-5'>Brands</h4>
                        <a href="#">Advertise with us</a>
                    </div>

                    <div className='flex flex-col mr-20 md:ml-0 ml-[25px]'>
                        <h4 className='font-medium'>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Support</a>
                        <a href="#">Mediakit</a>
                        <a href="#">Testimonials</a>
                        <a href="#">API</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privact Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>

                    <div className='flex flex-col mr-20'>
                        <h4 className='font-medium'>Directories</h4>
                        <a href="#">Design Jobs</a>
                        <a href="#">Designers for hire</a>
                        <a href="#">Freelance designers for hire</a>
                        <a href="#">Tags</a>
                        <a href="#">Places</a>

                        <h4 className='font-medium mt-5'>Design Assets</h4>
                        <a href="#">Dribbble Marketplace</a>
                        <a href="#">Creative Market</a>
                        <a href="#">Fontspring</a>
                        <a href="#">Font Squirrel</a>
                    </div>

                    <div className='flex flex-col mr-20'>
                        <h4 className='font-medium'>Design Resources</h4>
                        <a href="#">Freelancing</a>
                        <a href="#">Design Hiring</a>
                        <a href="#">Design Portfolio</a>
                        <a href="#">Design Education</a>
                        <a href="#">Creative Process</a>
                        <a href="#">Design Industry Trends</a>
                    </div>
                </div>
            </div>


            {/* Footer and count */}
            <div className='md:flex items-center justify-between mt-20 flex-none'>
                <div className='flex mx-20 md:mb-0 mb-4 md:ml-20 ml-28'>
                    &#169;
                    <p>2023 Dribble. All rights reserved</p>
                </div>

                <div className='flex items-center md:mr-20 ml-32'>
                    <p>21,540,130 shots dribbbled</p> &nbsp;
                    <AiFillCodeSandboxCircle className='text-rose-600' size={30} />
                </div>
            </div>
        </>
    );
};

export default Footer;