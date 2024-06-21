import React, { useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/Categories/categories';
import { FaChevronDown } from "react-icons/fa";
import { Link , NavLink} from 'react-router-dom';


function Subnavbar() {
  const categories = useContext(CategoriesContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const toggleDropdown = (categoryId) => {
    setOpenDropdown(openDropdown === categoryId ? null : categoryId);
  };

  const handleMouseEnter = (subcategory) => {
    setHoveredSubcategory(subcategory);
  };

  const handleMouseLeave = () => {
    setHoveredSubcategory(null);
  
  };
  const closeDropdown = () => {
    setOpenDropdown(null);
  }

  return (
    <div className="relative  " data-aos="fade-down" data-aos-duration="1000">
        <div className='hidden sm:block m-auto w-[100%] md:w-[90%] lg:w-[90%] xl:w-[80%] items-center justify-center px-0 py-2 sm:px-6 lg:px-8'>
            <div className="flex space-x-4 w-[100%] justify-between ">
                {categories.map((category) => (
                <div key={category.id} className="relative">
                
                    <button
                    className={` text-gray-800 text-xs lg:text-sm xl:text-base md:font-bold font-semibold py-2 xl:px-4 px-2 flex items-center justify-center gap-1 xl:gap-2  `}
                    onClick={() => toggleDropdown(category.id)}
                    >
                    <p className={`${openDropdown === category.id &&(` text-[#01D7E2] border-b-2 border-[#01D7E2]`)}`}>{category.name}</p><FaChevronDown className={` ${openDropdown === category.id &&(`rotate-180 text-[#01D7E2]`)} `}/>
                    </button>
                 
                    {openDropdown === category.id && (
                    <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-sm   w-60" onMouseLeave={closeDropdown}>
                        <ul className="py-1">
                        {category.subcategories.map((subcategory) => (
                            <li
                            key={subcategory.id}
                            className="hover:bg-gray-100 flex items-center relative"
                            onMouseEnter={() => handleMouseEnter(subcategory)}
                            onMouseLeave={handleMouseLeave}
                            >
                            <Link
                                to={`/category/${subcategory.categoryname}`}
                                className="block px-4 py-2 text-gray-800 hover:text-gray-900 w-full"
                            >
                                {subcategory.name}
                            </Link>
                            {hoveredSubcategory === subcategory && (
                                <img
                                src={subcategory.image}
                                alt={subcategory.name}
                                className="absolute left-full mr-2 w-24 h-24 rounded-xl object-cover"
                                style={{ width: '100px', height: '100px' }}
                                />
                            )}
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Subnavbar;
