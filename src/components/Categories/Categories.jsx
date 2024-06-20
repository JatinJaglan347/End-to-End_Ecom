import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/Categories/categories';
import { RandomproductsContext } from '../../contexts/RandomProducts/Randomproducts';
// import { Link } from 'react-router-dom';



const Categories = () => {
  const categories = useContext(CategoriesContext);
  const { id, title, description, category, price, discountPercentage, rating, imageUrl } = useContext(RandomproductsContext);
  const filteredCategories1 = categories.filter(category => category.id === 1);
  const filteredCategories = categories.filter(category => category.id !== 1 && category.id !== 6);
  const filteredCategories6 = categories.filter(category => category.id === 6);

  const formatString = (str) => {
    const words = str.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return str;
  };
  return (
    <>
      
      <div>
        <div>
            <div className='bg-[#01D7E2] w-[20%] h-[20%]  rounded-[100%] absolute  top-[50%] left-[50%] translate-x-[90%] translate-y-[730%] blur-[130px] z-[-1] '></div>
            <div className='bg-[#66C75F] w-[30%] h-[30%]  rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-160%] translate-y-[700%] blur-[160px] z-[-1]'></div>
            <div className='bg-[#ff7b7b] w-[30%] h-[30%]  rounded-[100%] absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[1200%] blur-[160px] z-[-1]'></div>
            <div className='bg-[#FBDB4F] w-[30%] h-[30%]  rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-40%] translate-y-[900%] blur-[160px] z-[-1]'></div>
            <div className='bg-[#3b54ad] w-[30%] h-[30%]  rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-220%] translate-y-[1400%] blur-[150px] z-[-1]'></div>
        </div>
        
        <div className=' flex flex-col justify-center items-center text-center m-auto w-[80%] '>
        <div className=' w-[100%] flex text-left pb-14 px-4 text-3xl font-semibold'>
            <h1>Discover a World of Quality Products :)</h1>
        </div>
          <div className=' grid xl:grid-cols-4  w-[100%]'>

            <div className=''>
              <div className='rounded-2xl bg-[white]/30  text-gray-800  shadow-md focus:outline-none p-5 m-2 '>
                <div className=' grid grid-cols-1'>
                  <div className='col-span-1 flex flex-col text-start justify-center items-center'>
                    <Link to={`/product/${id}/${title}`}>
                    <img className='w-[300px] h-[265px] object-cover rounded-2xl' src={imageUrl} alt="" />   
                    <div className='flex w-full flex-col gap-3 text-start  '>
                      <h1 className=' text-lg md:text-xl lg:text-2xl text-nowrap '>{formatString(title)}</h1>
                      <div className=' flex gap-3'>
                        <h2 className=' md:text-base text-sm'>At just <p className=' font-bold text-lg md:text-xl lg:text-2xl '> ${price}</p></h2>
                        <p className=' font-semibold text-base md:text-lg  lg:text-xl  flex items-end justify-end;'>{discountPercentage}%off</p>
                      </div>             
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <div className=' lg:col-span-3' >
              {filteredCategories1.map(category => (
                <div className='  rounded-2xl p-5 m-2 bg-white/40 shadow-md' key={category.id}>
                  <h2 className=' text-2xl pb-5 pl-3 font-semibold'>{category.name}</h2>
                  <div className=' grid grid-cols-1  md:gap-5  lg:grid-cols-3'>
                    {category.subcategories.map(subcategory => (
                      <div className='col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >
                        <Link to={`/category/${subcategory.categoryname}`}>
                          <img className='w-[300px] h-[250px] object-cover rounded-2xl shadow-md focus:outline-none ' src={subcategory.image} alt={subcategory.name} />
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
              <div className='  rounded-2xl p-5 m-2 col-span-2 bg-white/40 shadow-md' key={category.id}>
                <h2 className=' text-2xl pb-5 text-left pl-3 font-semibold'>{category.name}</h2>
                <div className=' grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
                  {category.subcategories.map(subcategory => (
                    <div className='  col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >
                      <Link to={`/category/${subcategory.categoryname}`}>
                        <img className=' w-[300px] h-[250px] object-cover rounded-2xl shadow-md focus:outline-none' src={subcategory.image} alt={subcategory.name} />
                        <h3 className=' pt-4 text-lg font-semibold'>{subcategory.name}</h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className=' grid lg:grid-cols-4  w-[100%] '>
            {filteredCategories6.map(category => (
              <div className=' rounded-2xl p-5 m-2 col-span-4  bg-white/40 shadow-md' key={category.id}>
                <h2 className=' text-2xl pb-5 pl-3 font-semibold'>{category.name}</h2>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-8'>
                  {category.subcategories.map(subcategory => (
                    <div className=' col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >
                      <Link to={`/category/${subcategory.categoryname}`}>
                        <img className='  w-[300px] h-[250px] object-cover rounded-2xl  shadow-md focus:outline-none' src={subcategory.image} alt={subcategory.name} />
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

export default Categories;
