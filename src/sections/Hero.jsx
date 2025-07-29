import { ArrowRight, EqualIcon, MenuIcon, SearchIcon, ShoppingBasketIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const Hero = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const setMenuToggle=(i)=>{
        i ?mobileMenu.classList.remove('hidden'):mobileMenu.classList.add('hidden')
    }
  return (
    <header className='h-[100vh]'>
        <nav className='h-[7vh] bg-[#0F154C] flex'>
            <div className='lg:pl-45'>
                <svg xmlns="http://www.w3.org/2000/svg"  x="0px" className='mx-10' y="0px" width="17" height="50" viewBox="0,0,256,256">
                <g fill="#d1d1d1" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(5.12,5.12)"><path d="M44.52734,34.75c-1.07812,2.39453 -1.59766,3.46484 -2.98437,5.57813c-1.94141,2.95313 -4.67969,6.64063 -8.0625,6.66406c-3.01172,0.02734 -3.78906,-1.96484 -7.87891,-1.92969c-4.08594,0.01953 -4.9375,1.96875 -7.95312,1.9375c-3.38672,-0.03125 -5.97656,-3.35156 -7.91797,-6.30078c-5.42969,-8.26953 -6.00391,-17.96484 -2.64844,-23.12109c2.375,-3.65625 6.12891,-5.80469 9.65625,-5.80469c3.59375,0 5.85156,1.97266 8.82031,1.97266c2.88281,0 4.63672,-1.97656 8.79297,-1.97656c3.14063,0 6.46094,1.71094 8.83594,4.66406c-7.76562,4.25781 -6.50391,15.34766 1.33984,18.31641zM31.19531,8.46875c1.51172,-1.94141 2.66016,-4.67969 2.24219,-7.46875c-2.46484,0.16797 -5.34766,1.74219 -7.03125,3.78125c-1.52734,1.85938 -2.79297,4.61719 -2.30078,7.28516c2.69141,0.08594 5.47656,-1.51953 7.08984,-3.59766z"></path></g></g>
                </svg>
            </div>
            <div className='text-[#d1d1d1] text-xs flex gap-10 ml-auto mx-7'>
                <span className='my-auto hidden lg:block'>Store</span>
                <span className='my-auto hidden lg:block'>Mac</span>
                <span className='my-auto hidden lg:block'>iPad</span>
                <span className='my-auto hidden lg:block'>iPhone</span>
                <span className='my-auto hidden lg:block'>Watch</span>
                <span className='my-auto hidden lg:block'>Airpods</span>
                <span className='my-auto hidden lg:block'>Tv & Home</span>
                <span className='my-auto hidden lg:block'>Entertainment</span>
                <span className='my-auto hidden lg:block'>Accessories</span>
                <span className='my-auto hidden lg:block'>Support</span>
                <span className='my-auto'><SearchIcon/></span>
                <span className='my-auto'><ShoppingBasketIcon /></span>
                <span onClick={()=>{mobileMenu.classList.remove('hidden')}} className='my-auto lg:hidden'  ><EqualIcon/></span>
            </div>
        </nav>
        <div id='mobileMenu' className='bg-white h-[100vh] w-[100%] z-400 fixed -mt-14 hidden'>
                <XIcon onClick={()=>{mobileMenu.classList.add('hidden')}} className='block text-xl text-gray-500 font-semibold text-right m-10 float-end' />
                <span className='block text-xl font-semibold m-10 mt-15'>Store</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Mac</span>
                <span className='block text-xl font-semibold m-10 mt-8'>iPad</span>
                <span className='block text-xl font-semibold m-10 mt-8'>iPhone</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Watch</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Airpods</span>
              <span className='block text-xl font-semibold m-10 mt-8'>Tv & Home</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Entertainment</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Accessories</span>
                <span className='block text-xl font-semibold m-10 mt-8'>Support</span>
        </div>
        <div className='h-[7vh] bg-[#2F397B] content-center'>
            <p className='text-sm text-[#d1d1d1] text-center'>Get iPhone 16 from just ₹6325.00/mo. for up to 12 mo.‡ with No Cost EMI and instant cashback.<a className='text-sky-500'>Buy</a></p>
        </div>
        <div className='h-[100vh] ' style={{backgroundImage: `linear-gradient(180deg, #1C1C42 0%, #6B8EEA 40%, #FFFFFF 100%)`,}}
>
            <div className='pt-10 content-center'>
                <h1 className='text-center text-white -mb-10 font-bold text-xl lg:text-2xl'>iPhone 16</h1>
                <img src={assets.headingApple} className='lg:h-45 h-30 mx-auto -mb-10' alt="" />
                <img src={assets.heroEnding} className='h-70 w-70 lg:w-fit md:w-fit lg:rotate-0 md:rotate-0  object-contain  mx-auto -rotate-90' alt="" />
                <center>
                      <button className='bg-blue-500 text-white p-2 px-5 rounded-3xl mt-20'>
                    Buy
                </button>
                </center>
                <p  className='font-bold text-medium text-center mt-10'>From ₹79900.00* or ₹6325.00/mo. for 12 mo.‡</p>
            </div>
        </div>
    </header>
  )
}

export default Hero
