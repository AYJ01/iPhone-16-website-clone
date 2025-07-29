import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const Iphones = () => {
    const [iphone,setIphone]= useState(assets.allIphones)
    const [loadNav,setLoadNav] = useState(false)
    const [colorOn,setColorOn]= useState(1)
    const [setText,setSetText]=useState("15.54 cm (6.1″) iPhone 162 in five colours") 
    useEffect(()=>{
        const navScroll = document.querySelector("#iphonesDiv")
        if (loadNav) {
            navScroll.classList.remove("opacity-0");
            navScroll.classList.remove("bottom-[-40px]");
            navScroll.classList.add("bottom-40");
            navScroll.classList.add("lg:bottom-10");
            } else {
            navScroll.classList.remove("bottom-40");
            navScroll.classList.remove("lg:bottom-10");
            navScroll.classList.add("bottom-[-40px]");
            navScroll.classList.add("opacity-0");
            }
    })
    useEffect(()=>{
        let colorSelected = document.getElementById('colorBar'+colorOn)
        let allcolorBar =colorSelected.parentElement.children
        Array.from(allcolorBar).forEach((element)=>{
        element.classList.remove('outline-2')
        element.classList.remove('outline-black')
        element.classList.remove('outline-offset-5')
        })
        colorSelected.classList.add('outline-2')
        colorSelected.classList.add('outline-black')
        colorSelected.classList.add('outline-offset-5')
        

    })
  return (
    <section  onMouseOver={()=>(setLoadNav(true))} onMouseLeave={()=>(setLoadNav(false))} className='w-screen h-screen lg:mb-40'>
        <div>
            <h1 className='lg:text-6xl text-3xl font-semibold mx-5 lg:mx-20 mt-40'>Take a closer look.</h1>
        </div>
        <div >
            <img src={iphone} className='lg:h-160 h-70 object-cover mx-auto mt-10' alt="" />
            
        </div>
        <div id='iphonesDiv' className='w-fit mx-auto z-100 left-1/2 transform -translate-x-1/2 fixed transition-all duration-100 ease-in-out'>
        <p className='text-sm text-black text-center font-bold mb-4 bg-white/20'>{setText}</p>
            <div id='allcolorBar' className='bg-gray-200/60 w-70 p-4 rounded-full flex mx-auto backdrop-blur-md gap-4 px-5'>
                <div id='colorBar1' onClick={()=>(setColorOn(1),setIphone(assets.allIphones),setSetText(`15.54 cm (6.1″) iPhone 162 in five colours`))}  className="w-7 h-7 rounded-full  my-auto relative mx-auto bg-cover" style={{ backgroundImage: `url(${assets.radialColors})` }}></div>
                <div id='colorBar2' onClick={()=>(setColorOn(2),setIphone(assets.blueIphone),setSetText(`17.00 cm (6.7″) iPhone 16 Plus2 and 15.54 cm (6.1″) iPhone 162 in Ultramarine`))} 
                className='w-7 h-7  rounded-full bg-[#6467E6]  my-auto relative mx-auto shadow-[inset_0_2px_2px_rgba(0,0,0,0.4)]'></div>
                <div id='colorBar3' onClick={()=>(setColorOn(3),setIphone(assets.greenIphone),setSetText(`17.00 cm (6.7″) iPhone 16 Plus2 and 15.54 cm (6.1″) iPhone 162 in Teal`))}  
                className='w-7 h-7 rounded-full bg-[#85ADAC]  my-auto relative mx-auto shadow-[inset_0_2px_2px_rgba(0,0,0,0.4)]'></div>
                <div id='colorBar4' onClick={()=>(setColorOn(4),setIphone(assets.pinkIphone),setSetText(`17.00 cm (6.7″) iPhone 16 Plus2 and 15.54 cm (6.1″) iPhone 162 in Pink`))}  
                className='w-7 h-7 rounded-full bg-[#EE94CA]  my-auto relative mx-auto shadow-[inset_0_2px_2px_rgba(0,0,0,0.4)]'></div>
                <div id='colorBar5' onClick={()=>(setColorOn(5),setIphone(assets.whiteIphone),setSetText(`17.00 cm (6.7″) iPhone 16 Plus2 and 15.54 cm (6.1″) iPhone 162 in White`))}  
                className='w-7 h-7 rounded-full bg-[#E7E7E7] my-auto relative mx-auto shadow-[inset_0_2px_2px_rgba(0,0,0,0.4)]'></div>
                <div id='colorBar6' onClick={()=>(setColorOn(6),setIphone(assets.blackIphone),setSetText(`17.00 cm (6.7″) iPhone 16 Plus2 and 15.54 cm (6.1″) iPhone 162 in Black`))}  className='w-7 h-7 rounded-full bg-[#202020] my-auto relative mx-auto shadow-[inset_0_2px_2px_rgba(0,0,0,0.4)]'></div>
            </div>
        </div>
    </section>
  )
}

export default Iphones
