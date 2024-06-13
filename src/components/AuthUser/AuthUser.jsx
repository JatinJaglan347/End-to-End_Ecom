import React, { useState, useEffect } from 'react';
import image1 from '../../assets/3.jpg'
import image2 from '../../assets/4.jpg'

function AuthUser() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
   
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    const width = (windowSize.width)
    const height = (windowSize.height)
    const formwidth= (width/100)*30;
    const formheight =(height/100)*90;
    const loginheight = (height/100)*80;
    

    const [showLogin, setShowLogin] = useState(false);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    }
  return (
    <>
        <div>
            <div className={`bg-[#131314] items-center text-center justify-center flex `} style={{height:` ${height}px`}}>
                <div className={`md:w-[${formwidth}px] overflow-hidden shadow-lg  ${showLogin ? `shadow-[#646464]`: `shadow-[#02919B]` } rounded-2xl `} style={{ height:`${formheight}px`}}>

{/* SIGNUP  */}

                    <div className=' md:px-16 px-10 w-full h-full bg-cover bg-center bg-no-repeat items-center flex flex-col justify-center text-center rounded-2xl overflow-hidden ' style={{ backgroundImage: `url(${image1})` }}>
                        <div className={` flex flex-col gap-8 ${showLogin ? `z-[-1]`: 'z-[10]'} `} >
                            <div className='  items-center flex flex-col justify-center text-center pb-5  '>
                                <h1 className=' text-4xl shadow-md text-white font-bold drop-shadow-md'>Signup</h1>
                            </div>

                            <div className=' flex gap-4  w-[100%]  '>
                                <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='First name' type="text" />
                                <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Last name' type="text" />
                            </div>

                            <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Email' type="email" />
                            <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Password' type="password" />
                            <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Confirm Password' type="password" />
                            <div className=' flex text-[#646464] gap-2'>
                                <p>Already have an account? </p><a href="#" onClick={toggleForm}><h1 className='  text-[#a9a9a9] font-bold '> Login</h1></a>
                            </div>
                            <div>
                                <button className=' w-full rounded-lg pt-2 pb-2 border inset-0 border-[#01D7E2] text-white hover:text-[#01D7E2] bg-[#0B0B0B]'>Submit</button>
                            </div>
                        </div>
                    </div>

{/* LOGIN  */}

                    <div className={`transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat items-center flex flex-col justify-center text-center rounded-b-2xl rounded-tl-[100px] md:rounded-tl-[130px] shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)] shadow-[#646464] `} style={{
                            backgroundImage: `url(${image2})`,
                            marginTop: showLogin ? `${-loginheight}px`: '-20%'
                        }}>
                            <div className=' md:px-16 px-10 w-full flex flex-col gap-8 justify-center  ' style={{ height:`${loginheight}px`}}>
                                <div className='  items-center flex flex-col justify-center text-center pb-5'>
                                    <h1 className=' text-4xl shadow-md text-white font-bold drop-shadow-md '>Login</h1>
                                </div>
                                <div className='flex flex-col gap-3 w-[100%]'>
                                    <div className='flex flex-col gap-8 w-[100%]'>
                                        <input className=' w-[100%] rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Email' type="email" />
                                        <input className=' w-[100%]  rounded-md px-3 py-1 backdrop-blur-sm bg-white/30 text-white' placeholder='Password' type="password" />
                                    </div>
                                    <div className=' flex text-[#646464] gap-2 hover:text-[#bb905b]'>
                                        <a href=""><p>Forgot password? </p></a>
                                    </div>
                                </div>
                                <div className=' flex text-[#646464] gap-2'>
                                    <p>Don't have an account? </p><a href="#" onClick={toggleForm}><h1 className=' text-[#a9a9a9] font-bold hover:text-[#8A7964]'>Signup</h1></a>
                                </div>

                                <div>
                                    <button className=' w-full rounded-lg pt-2 pb-2 border inset-0 border-[#8A7964] text-white hover:text-[#8A7964] bg-[#171717]'>Submit</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default AuthUser