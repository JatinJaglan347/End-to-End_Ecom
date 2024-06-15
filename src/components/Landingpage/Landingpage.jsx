import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Mainnavbar } from '../Navbar/Mainnavbar';
import Subnavbar from '../Navbar/Subnavbar';
import { CategoriesContext } from '../../contexts/Categories/categories';
import Randomproducts from '../RandomProducts/Randomproducts';

const Landingpage = () => {
    const categories = useContext(CategoriesContext);
    const filteredCategories1 = categories.filter(category => category.id === 1);
    const filteredCategories = categories.filter(category => category.id !== 1 && category.id !== 6);
    const filteredCategories6 = categories.filter(category => category.id === 6);
  return (
    <>
    <Mainnavbar/>
    <Subnavbar/>
        <div> 
            <div>
              
            </div>
            <div className=' flex flex-col justify-center items-center text-center m-auto w-[80%] '>
                <div className=' grid xl:grid-cols-4  w-[100%]'>
                    <div className=' m-2 xl:col-span-3 md:'>
                        <div className='rounded-2xl p-5    w-full h-full bg-transparent'>
                          <Randomproducts/>
                        </div>
                    </div>


                    <div className='' >
                        {filteredCategories1.map(category => (
                            <div className=' rounded-2xl p-5 m-2 bg-slate-100' key={category.id}>
                            <h2 className=' text-2xl pb-5 pl-3 font-bold'>{category.name}</h2>
                            <div className=' grid grid-rows-1 md:grid-cols-3 md:gap-5 xl:gap-0 xl:grid-cols-1'>
                            
                                {category.subcategories.map(subcategory => (
                                
                                <div className='col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >  
                                    <Link to={`${subcategory.categoryname}`}>
                                        <img className='w-[300px] h-[250px]object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name} /> 
                                        <h3 className=' pt-2 text-lg pb-6 font-semibold' >{subcategory.name}</h3>  
                                    </Link>
                                </div>
                                
                                ))}
                            
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' grid lg:grid-cols-4 grid-rows-2 w-[100%] '>
                    {filteredCategories.map(category => (
                        <div className='  rounded-2xl p-5 m-2 col-span-2 bg-slate-100' key={category.id}>
                        <h2 className=' text-2xl pb-5 text-left pl-3 font-bold'>{category.name}</h2>
                        <div className=' grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
                            {category.subcategories.map(subcategory => (
                            <div className='  col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >
                                <Link to={`${subcategory.categoryname}`}>
                                    <img className=' w-[300px] h-[250px] object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name}  />
                                    <h3 className=' pt-4 text-lg font-semibold'>{subcategory.name}</h3>
                                </Link>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

                <div  className=' grid lg:grid-cols-4  w-[100%] '>
                {filteredCategories6.map(category => (
                    <div className=' rounded-2xl p-5 m-2 col-span-4 bg-slate-100' key={category.id}>
                    <h2 className=' text-2xl pb-5 pl-3 font-bold'>{category.name}</h2>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
                        {category.subcategories.map(subcategory => (
                        <div className=' col-span-1 flex flex-col justify-center items-center' key={subcategory.id} > 
                            <Link to={`${subcategory.categoryname}`}>
                                <img className='  w-[300px] h-[250px] object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name} />
                                <h3 className=' pt-4 text-lg font-semibold'>{subcategory.name}</h3>
                            </Link>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
  
            </div>
        </div>
    </>
  );
}

export default Landingpage;
