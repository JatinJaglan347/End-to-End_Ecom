import React from 'react';
import aboutImage from '../../assets/aboutImage.svg'; // Adjust the path if necessary

function SmallAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className='flex flex-col md:flex-row items-center justify-between px-6 w-[80%]'>
            <div className="md:w-1/2 px-4">
                <h2 className="text-2xl font-bold mb-4">Discover a world of possibilities with us.</h2>
                <p className="text-lg mb-2">
                From fashion to food, vehicles to beauty essentials, we curate the best products from around the globe. With a commitment to quality, timely delivery, and exceptional service, we're here to make your shopping experience unforgettable. Explore, shop, and indulge in the finest offerings—all at <strong className='text-[#01D7E2]'>Ecom</strong>.
                </p>
            </div>
            <div className="md:w-1/2 px-4">
                <img src={aboutImage} alt="About Us" className="w-full h-auto"/>
            </div>
        </div>
    </div>
  );
}

export default SmallAbout;
