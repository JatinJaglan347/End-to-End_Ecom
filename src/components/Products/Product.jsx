import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { TbTruckReturn ,TbTruckDelivery ,TbShieldCheck, TbCash } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { useParams } from 'react-router';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function Product() {
    const { category, id } = useParams();
    const [ product , setProduct]= useState([])
    const [loading , setLoading]= useState([true])
    const [items, setItems] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [warning, setWarning] = useState("");
    const [subWarning, setSubWarning] = useState("");
    const [selectedImage, setSelectedImage] = useState('');

    useEffect (()=> {
        ;(async ()=>{
            try{
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                console.log(response.data);
                setProduct(response.data);
            }catch (error){
                console.error('Error fetching data:', error);
            }finally{
                setLoading(false);
            }
        })();
    },[])

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
    const required =[
        {
            id:1,
            icon:<TbTruckReturn />,
            text: product.returnPolicy,
        },
        {
            id:2,
            icon:<TbTruckDelivery />,
            text: 'Free Delivery',
        },
        {
            id:3,
            icon:<TbShieldCheck />,
            text: product.warrantyInformation,
        },
        {
            id:4,
            icon:<TbCash />,
            text:'Pay on Delivery',
        }
    ]
    const incrementQuantity = () => {
        setWarning("");
        setSubWarning("")
        
        if (quantity < product.stock) {
          setQuantity(quantity + 1);
          if(quantity > 10){
            setSubWarning("Ordering more than 10 products may increase the delivery time.");
        }
        }
        
        else {
            setSubWarning("");
          setWarning("You cannot order more than the product quantity.");
        }
      };
    
    const decrementQuantity = () => {
        setWarning("");
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    const resetQuantity =()=>{        
        setQuantity(1);
    }
    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };


    if (loading){
        return(
            <>
            <LoadingScreen/>
            </>
        )
    }

  return (
    <>
    <div className='w-full bg-slate-100'>
        <div className=' flex flex-col items-center justify-center  '>
            <div className=' w-[80%] flex flex-col gap-7 my-7 md:my-10'>
               <div className=' w-full flex flex-col lg:flex-row gap-7'>
                    <div className='imagebox flex flex-col lg:w-[50%] rounded-xl '>
                        <div className='w-full h-[70%] mb-[5%] bg-white rounded-xl drop-shadow-md flex items-center justify-center'>
                            <img className='w-[90%] lg:w-[60%]' src={selectedImage || product.images[0]} alt="" />
                        </div>
                        <div className='flex gap-4 w-full h-[25%] bg-white rounded-xl drop-shadow-md p-4 justify-between'>
                            {product.images.length === 1 && (
                                <div className='flex justify-center text-center items-center m-auto'>
                                    <p className="text-gray-500">No more related images</p>
                                </div>
                            )}
                            {product.images.length > 1 && (
                                <div className='flex gap-4 h-full w-full bg-white rounded-xl  lg:p-4 p-1 justify-between'>
                                    {product.images.map((image, index) => (
                                        <span
                                            key={index}
                                            className={`overflow-hidden rounded-md border border-gray-300 object-cover cursor-pointer flex items-center justify-center text-center ${selectedImage === image ? ' border-blue-800' : ''}`}
                                            onClick={() => handleThumbnailClick(image)}
                                        >
                                            <img className={`w-[90%] lg:w-[60%] ${selectedImage === image ? 'opacity-100' : 'opacity-70'}`} src={image} alt="" />
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className=' contentbox flex justify-center flex-col lg:w-[50%] bg-white rounded-xl drop-shadow-md  p-6 md:p-12'>

                        <div>
                            <div >
                                <h1 className=' md:text-3xl text-2xl font-bold text-wrap '>{product.title}</h1>
                                <p className=' md:text-lg text-base text-[#565959] text-pretty py-3'>{product.description}</p>
                            </div>
                            <div className=' flex gap-5'>
                                <div className=' flex text-sm md:text-md lg:text-lg  xl:text-xl gap-1 '><p className=' text-sm md:text-base xl:text-base flex text-end items-end justify-end '>{product.rating}</p><p className=' text-[#ffa41c] text-lg flex text-end items-end justify-end'>{reviewStars(product.rating)}</p></div>
                                <p className=' text-base text-blue-700'>{product.reviews.length} ratings</p>
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag, index) => (
                                        <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=' z-10 w-full flex flex-col items-center'>
                            <div className="border-t  border-gray-300 m-6 w-full "></div>   
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <h1 className=' text-2xl text-green-700 '>
                                In stock
                            </h1>
                            <div className=' flex flex-col gap-5  '>
                                <div className=' flex flex-col gap-2'>
                                    <div className=' flex gap-2 items-end flex-row '>
                                        <p className=' text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-red-700'>-{product.discountPercentage}%</p>
                                        <p className=' text-xl md:text-2xl lg:text-3xl xl:text-4xl '>${product.price}</p>
                                    </div>
                                    <div className=' flex text-[#565959] text-sm md:text-md lg:text-lg xl:text-xl'><p>M.R.P:&nbsp;</p><p className=' line-through '>${actualPrise(product.price,product.discountPercentage)}</p></div>
                                </div>
                                <p className='  text-[#565959] text-sm lg:text-base '>Inclusive of all taxes</p>      
                            </div>
                        </div>

                        <div className=' z-10 w-full flex flex-col items-center'>
                            <div className="border-t  border-gray-300 m-6 w-full "></div>   
                        </div>

                        <div>
                            <div className=' flex flex-wrap lg:justify-between justify-center items-center text-center '> 
                               {required.map((item, i) => (
                                <div key={i} className="flex  flex-col items-center px-2 text-center  justify--center">
                                    <div className="text-xl rounded-full p-1 bg-slate-100">
                                        {item.icon}
                                    </div>
                                    <p className=' w-[92px] capitalize '>{item.text}</p>
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className=' z-10 w-full flex flex-col items-center'>
                            <div className="border-t  border-gray-300 m-6 w-full "></div>   
                        </div>

                        <div>
                            <div className="space-s-4  flex flex-wrap items-center gap-2 pb-2  ">
                                <div className=' flex gap-2 flex-wrap'>
                                <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                                    <button
                                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                    onClick={incrementQuantity}
                                    >
                                    +
                                    </button>
                                    <span className="duration-250 text-heading flex h-full w-12 flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out md:w-20 xl:w-24">
                                    {quantity}
                                    </span>
                                    <button
                                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                    onClick={decrementQuantity}
                                    >
                                    -
                                    </button>
                                    
                                </div>

                                <button
                                    className="text-heading group flex h-11 w-10 text-center  flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-300 md:h-12"
                                    onClick={resetQuantity}
                                >
                                    <GrPowerReset />
                                </button>

                                </div>
                                <button
                                    type="button"
                                    className="h-11  rounded-md bg-black px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick=" "
                                >
                                    Add to cart
                                </button>
                                
                            </div>
                            {subWarning && (
                                <div className="text-green-600 py-2">
                                    {subWarning}
                                </div>
                            )}
                            {warning && (
                            <div className="text-red-500 py-2">
                                {warning}
                            </div>
                            )}
                            <div>
                                <p className=' text-sm md:text-base text-slate-500'>Total <strong>{product.stock}</strong> products in stock</p>
                            </div>
                        </div>


                    </div>
               </div>
               <div>
                    <div className='w-full bg-white rounded-xl drop-shadow-md flex flex-col  p-12'>
                        <div className=' flex flex-col gap-6 ' >
                            <h1 className=' text-4xl font-semibold'>Reviews</h1>
                            <div className=' flex gap-5'>
                                <div className=' flex text-sm md:text-md lg:text-lg  xl:text-xl gap-1 '><p className=' text-[#ffa41c] md:text-2xl text-xl  flex text-end items-end justify-end'>{reviewStars(product.rating)}</p><p className=' text-sm md:text-base xl:text-base flex text-end items-end justify-end font-semibold '>{product.rating}</p></div>  
                            </div>
                            <div>
                                <p className=' text-base text-blue-700'><strong>{product.reviews.length}</strong> ratings for</p>
                                <div >
                                <h1 className=' md:text-2xl text-xl  text-wrap '>{product.title}</h1>
                                <p className=' md:text-base text-sm text-[#565959] text-wrap py-3'>{product.description}</p>
                            </div>
                            <p className= " text-gray-500">Reviews :</p>
                            </div>
                        </div> 
                        <div>
                            {product.reviews.map((review,i)=>(
                                
                                <span key={i} className=''>
                                    <div className=' z-10 w-full flex flex-col items-center'>
                                        <div className="border-t  border-gray-300 m-6 w-full "></div>   
                                    </div>
                                    <div className=' flex flex-col gap-4'>
                                        <div>
                                            <p className=' text-lg md:text-xl flex flex-wrap font-medium text-gray-800'>{review.reviewerName}</p>
                                            <p className=' text-[#ffa41c] md:text-lg text-base  flex text-end '>{reviewStars(review.rating)}</p>
                                        </div>
                                        <div>
                                            <p className=' text-base md:text-lg flex flex-wrap text-gray-700' >{review.comment}</p>
                                            <p className=' text-gray-500 flex flex-wrap'>Published Date: {new Date(review.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </span>
                            ))}
                        </div> 
                    </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product