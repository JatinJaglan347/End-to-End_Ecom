import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Mainnavbar } from '../Navbar/Mainnavbar';
import Subnavbar from '../Navbar/Subnavbar';
import { CategoriesContext } from '../../contexts/Categories/categories';
import { RandomproductsContext } from '../../contexts/RandomProducts/Randomproducts';
import Hereosection from '../HeroSection/Hereosection';
import Categories from '../Categories/Categories';
import SmallAbout from '../About/SmallAbout';
import Footer from '../Footer/Footer';


const Landingpage = () => {

  return (
    <>
    <div className=' flex flex-col'>

    
      {/* <div className=' w-[100%] bg-gradient-to-b from-slate-300 fixed h-[70%]'> */}
      
      </div>
      <div className=' z-10'>
        <Mainnavbar />
        <Subnavbar />
        <div className=' z-10 w-full flex flex-col items-center'>
            <div className="border-t  border-gray-400 mb-8 w-[80%] "></div>   
        </div>
        <Hereosection/>
        <div className=' z-10 w-full flex flex-col items-center'>
            <div className="border-t  border-gray-400 my-14 w-[80%] "></div>   
        </div>
        <Categories/>
        <div className=' z-10 w-full flex flex-col items-center'>
            <div className="border-t  border-gray-400 my-14 w-[80%] "></div>   
        </div>
        <SmallAbout/>
        <div className=' z-10 w-full flex flex-col items-center'>
            <div className="border-t  border-gray-400 my-14 w-[80%] "></div>   
        </div>
        <Footer/>
      </div>
    {/* </div> */}
    </>
  );
}

export default Landingpage;
