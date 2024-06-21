import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Itemdisplay( ) {
    const {category}= useParams();
    const [items, setItems] = useState([])
    const [loading , setLoading ] = useState([true])

    AOS.init();
    useEffect (()=>{
      AOS.init({duration:1000})
    })
    
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
        <LoadingScreen/>
        </>)
    }

  return (
    <>
        <div className=' w-full bg-slate-100'>
            <div className=' w-full justify-center items-center flex flex-col '>
                <div className=' lg:w-[80%] my-11'>
                    {items.map(product => (
                        <div className='flex flex-col ' key={product.id}>
                            <div className=' flex gap-6  m-2 rounded-xl drop-shadow-md bg-white ' data-aos="fade-up" >
                                
                                <div className='md:max-w-[20%] max-w-[35%] md:min-w-[20%] min-w-[35%] bg-[#d1d1d1] rounded-l-xl drop-shadow-md  items-center justify-center text-center flex '>
                                    <Link to={`/category/${category}/product/${product.id}/${product.title}`}>
                                    <img className='' src={product.images[0]} alt={product.title} />
                                    </Link>
                                </div>
                             
                                <div className=' flex flex-col justify-center md:gap-1 xl:gap-2 '>
                                    <Link to={`/category/${category}/product/${product.id}/${product.title}`}>
                                    <h2 className='flex flex-wrap text-lg md:text-2xl lg:text-3xl xl:text-4xl'>{product.title}</h2>
                                    </Link>
                                    <div className=' flex text-sm md:text-md lg:text-lg  xl:text-xl'><p className=' text-center items-center justify-center text-[#ffa41c] flex'>{reviewStars(product.rating)}</p> <p className=' '>({product.rating})</p></div>
                                  
                                    <p className=' text-[#565959]  text-sm md:text-base lg-text-lg xl:text-xl'>({product.reviews.length}) customer reviews</p>
                                    <Link to={`/category/${category}/product/${product.id}/${product.title}`}>
                                    <div className=' flex gap-2 md:items-end flex-col md:flex-row'>
                                        <p className=' text-xl md:text-2xl lg:text-3xl xl:text-4xl '>${product.price}</p>
                                        <div className=' flex gap-2 items-end flex-row '>
                                            <div className=' flex text-[#565959] text-sm md:text-base lg:text-lg xl:text-xl'><p>M.R.P: </p><p className=' line-through '>${actualPrise(product.price,product.discountPercentage)}</p></div>
                                            <p className=' text-sm md:text-base lg:text-lg xl:text-xl'>({product.discountPercentage}% off)</p>
                                        </div>  
                                    </div>
                                    </Link>
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