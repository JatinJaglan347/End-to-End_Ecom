import React, { useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hereosection() {
    useEffect (()=>{
        AOS.init({duration:1000})
    })
    AOS.init();
    return (
        <>
        <div className='max-w-screen overflow-hidden box-border'>
            <div className='w-screen flex items-center justify-center overflow-hidden  '>
                <div className=" flex flex-col justify-center items-center  w-[80%] md:h-[20%]">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="md:w-[50%] flex flex-col gap-4 justify-center pl-8     ">
                            <div className='bg-[#01D7E2] w-[60%] h-[60%]  rounded-[100%] absolute  top-[50%] left-[50%] translate-x-[-160%] translate-y-[-140%] blur-[220px] z-[-1] '></div>
                            <div className='bg-[#66C75F] w-[30%] h-[30%]  rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-40%] translate-y-[0%] blur-[160px] z-[-1]'></div>
                            <div className='bg-[#ff7b7b] w-[30%] h-[30%]  rounded-[100%] absolute top-[50%] left-[50%] translate-x-[-80%] translate-y-[130%] blur-[160px] z-[-1]'></div>
                            <div className='bg-[#FBDB4F] w-[20%] h-[20%]  rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-200%]  translate-y-[290%] blur-[160px] z-[-1]'></div>
                            <div>
                                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
                                    Welcome to<strong className="text-[#01D7E2]"> Ecom</strong>
                                </h1>
                                <p className='md:text-lg text-gray-600'>
                                    Where Every Purchase is a Celebration<strong className='text-[#01D7E2]'>!</strong>
                                </p>
                            </div>
                            <div className="md:text-lg">
                                <p className='flex items-center'>
                                    Discover a World of&nbsp;
                                    <Link>
                                    <span className='underline underline-offset-2 font-semibold text-[#01D7E2]'>Quality Products</span>
                                    </Link>
                                </p>
                                <p className='text-gray-700'>Handpicked Just for You.</p>
                            </div>
                            <div>
                                <p className='md:text-lg text-sm flex items-center'>
                                    <Link to="/" className='flex items-center border-b-2 border-r-2 rounded-br-lg border-[#01D7E2] text-[#01D7E2] hover:text-slate-500 hover:border-slate-500'>
                                        Shop Now <MdArrowOutward className='ml-1' />
                                    </Link>
                                    &nbsp;and Elevate Your Lifestyle <strong>!</strong>
                                </p>
                            </div>
                           
                        </div>
                        
                        <div className="imagesize md:w-[50%] py-6 md:px-10">
                            <div className="pointer-events-none w-full mx-auto">
                                <div className="flex items-center space-x-6 lg:space-x-8">
                                    <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 flex-1">
                                        <div className="h-56 w-full overflow-hidden rounded-lg" data-aos="fade-down-right" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 flex-1" >
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 flex-1">
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto" data-aos="fade-down-left" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-56 w-full overflow-hidden rounded-lg lg:w-auto" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hereosection;
