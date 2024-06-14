import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useParams } from 'react-router';

function Itemdisplay( ) {
    const {category}= useParams();
    const [items, setItems] = useState([])
    const [loading , setLoading ] = useState([true])
    
    useEffect(()=> {
       ;(async ()=> {
        try{
            const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
            console.log(response.data);
            setItems(response.data.products)
        }catch (error) {
            console.error('Error fetching data:', error);
        }finally{
            setLoading(false);
        }
        
       })();
    },[category])
    
    const reviewStars = (star) => {
        let fullStar = Math.round(star);
        let halfStar = star - fullStar;
        let emptyStar = 5 - fullStar - halfStar;
      
        let stars = [];
      
        for (let i = 1; i <= 5; i++) {
          if (i <= fullStar) {
            stars.push(<IoIosStar key={i} />);
          } else if (i - fullStar <= halfStar) {
            stars.push(<IoIosStarHalf key={i} />);
          } else {
            stars.push(<IoIosStarOutline key={i} />);
          }
        }
      
        return stars;
      };
      
    const actualPrise = (prise, discount)=>{
        let actualPrise = prise / (1- (discount / 100))
        return actualPrise.toFixed(2)
    }

    if (loading){
        return( <>
        <div>Loading.....</div>
        </>)
    }

  return (
    <>
        <div className=''>
            <div>
                <div>
                    {items.map(product => (
                        <div className=' ' key={product.id}>
                            <div className=' flex gap-6 border-2 m-2 rounded-lg'>
                                <div className=' w-[20%] bg-[#d1d1d1] items-center justify-center text-center flex '>
                                    <img className=' ' src={product.images[0]} alt={product.title} />
                                </div>
                                <div className=' flex flex-col justify-center md:gap-1 xl:gap-2'>
                                    <h2 className=' text-lg md:text-2xl lg:text-3xl xl:text-4xl'>{product.title}</h2>
                                    <div className=' flex text-sm md:text-md lg:text-lg  xl:text-xl'><p className=' text-center items-center justify-center text-[#ffa41c] flex'>{reviewStars(product.rating)}</p> <p className=' '>({product.rating})</p></div>
                                  
                                    <p className=' text-[#565959] text-sm md:text-md lg-text-lg xl:text-xl'>({product.reviews.length}) customer reviews</p>
                                    <div className=' flex gap-2 items-end'>
                                        <p className=' text-xl md:text-2xl lg:text-3xl xl:text-4xl '>${product.price}</p>
                                        <div className=' flex text-[#565959] text-sm md:text-md lg:text-lg xl:text-xl'><p>M.R.P: </p><p className=' line-through '>${actualPrise(product.price,product.discountPercentage)}</p></div>
                                        <p className=' text-sm md:text-md lg:text-lg xl:text-xl'>({product.discountPercentage}% off)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
export default Itemdisplay