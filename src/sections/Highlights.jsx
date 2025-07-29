import React, { useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'
import ReactPlayer from 'react-player'
import { DotIcon, PauseIcon, PlayIcon, RecycleIcon, RedoIcon, RotateCcwIcon } from 'lucide-react'
import { useInView } from 'framer-motion';


const Highlights = () => {
    const [loadNav,setLoadNav] = useState(false)
    const [iconSlide,setIcon]=useState("playing")
    let [elemDisplay,setelemDisplay] =useState(0)
    let iconPlay = <PlayIcon fill='black' onClick={()=>setPlayValue(true)} />
    let iconPause = <PauseIcon fill='black' onClick={()=>setPlayValue(false)} />
    let iconReplay = <RotateCcwIcon  onClick={()=>(setPlayValue(true),setIValue(0))} />
    const [playValue,setPlayValue] = useState(true)
    const [iValue,setIValue] = useState(0)



    useEffect(()=>{
        const navScroll = document.querySelector("#highlightsNav")
        if (loadNav) {
            navScroll.classList.remove("opacity-0");
            navScroll.classList.remove("bottom-[-40px]");
            navScroll.classList.add("bottom-10");
            } else {
            navScroll.classList.remove("bottom-10");
            navScroll.classList.add("bottom-[-40px]");
            navScroll.classList.add("opacity-0");
            }
        })
        
        useEffect(() => {
            const divOne = document.getElementById("divOne")?.getBoundingClientRect();
            const scrollMain = document.getElementById("scrollMain");

            if (!divOne || !scrollMain) return;

            const scrollValue = divOne.width;
            let i = iValue;
            let intervalId;

            if (playValue) {
              intervalId = setInterval(() => {
                scrollMain.scrollLeft = scrollValue * i;
                if (i <= 5) {
                  i++;
                  let progessBar = document.getElementById("proBar"+i)
                  progessBar.style.animation = "nowPlayer 5s ease-in-out"
                  progessBar.firstChild.style.animation = "nowPlaying 5s ease-in-out"
                } else {
                    setIValue(5)
                  clearInterval(intervalId);
                }
              }, 5000);
            } else {
              intervalId = setInterval(() => {
                scrollMain.scrollLeft = scrollValue * i;
                let progessBar = document.getElementById("proBar"+(i+1))
                progessBar.style.width = "20%"
              }, 500);
            }
            let allProBar = document.getElementById("allProBar").children
            Array.from(allProBar).forEach(element => {
              element.style.width = ''; 
            });
            return () => clearInterval(intervalId);
            }, [playValue, iValue]);
    
        
    

    
  return (
    <section  onMouseOver={()=>(setLoadNav(true))} onMouseLeave={()=>(setLoadNav(false))} className='h-[120vh] w-[100%]'>
        <div>
            <h1 className='lg:text-6xl text-3xl font-semibold mx-5 lg:mx-20 mt-40'>Get the highlights.</h1>
        </div>
        <div id='scrollMain'  className='flex overflow-hidden gap-4 p-5 lg:p-20' style={{scrollBehavior:"smooth"}}>
            <div id='divOne'    className={`lg:h-[90vh] h-130 min-w-85 lg:min-w-[100%] bg-center bg-no-repeat lg:mx-auto my-10 rounded-4xl p-5 lg:p-10`} 
            style={{backgroundImage:`url(`+assets.highLightsImage1+`)`,backgroundSize:'110%',backgroundSize:"cover"}}>
                <p className='lg:text-2xl font-semibold  lg:w-100 w-50 lg:font-bold text-white'>
                    The first iPhone designed for Apple Intelligence. Personal, private, powerful.1
                </p>
            </div>
            <div id='divTwo' className={`lg:min-h-[90vh] min-h-130 min-w-85 lg:min-w-[100%] mx-auto my-10`}  >
                
               <ReactPlayer className='rounded-4xl lg:min-h-[90vh] min-h-130 min-w-85 lg:min-w-[100%]' style={{objectFit:'cover'}} src={assets.highlightsVideo} playing={true} muted={true} />
               <p className='lg:text-3xl  lg:w-150 w-50 font-semibold z-50 -mt-120  lg:-mt-155 mx-5 lg:mx-20'>
                    Camera Control. Get the perfect photo. While barely lifting a finger.
                </p>
            </div>
            <div id='divThree'   className={`lg:h-[90vh] h-130 min-w-85 lg:min-w-[100%] bg-center bg-no-repeat lg:mx-auto my-10 rounded-4xl p-5 lg:p-10`} 
            style={{backgroundImage:`url(`+assets.highLightsImage5+`)`,backgroundSize:'110%',backgroundSize:"cover"}}>
                <p className='lg:text-2xl font-semibold  lg:w-100 w-50 lg:font-bold text-white'>
                    The first iPhone designed for Apple Intelligence. Personal, private, powerful.1
                </p>
            </div>
            <div id='divFour'   className={`lg:h-[90vh] h-130 min-w-85 lg:min-w-[100%] bg-center bg-no-repeat lg:mx-auto my-10 rounded-4xl p-5 lg:p-10`} 
            style={{backgroundImage:`url(`+assets.highLightsImage6+`)`,backgroundSize:'110%',backgroundSize:"cover"}}>
                <p className='lg:text-2xl font-semibold  lg:w-100 w-50 lg:font-bold'>
                    A big boost in battery life? Yes, please.
                </p>
            </div>
            <div id='divFive'   className={`lg:h-[90vh] h-130 min-w-85 lg:min-w-[100%] lg:bg-center bg-no-repeat lg:mx-auto my-10 rounded-4xl p-5 lg:p-10`} 
            style={{backgroundImage:`url(`+assets.highLightsImage7+`)`,backgroundSize:'110%',backgroundSize:"cover"}}>
                <p className='lg:text-2xl font-semibold  lg:w-100 w-50 lg:font-bold text-white'>
                    New Ultra Wide camera. Take your photos further. And closer.
                </p>
            </div>
        </div>
        <div id='highlightsNav' className='w-fit mx-auto z-100 left-1/2 transform -translate-x-1/2  flex gap-5 fixed transition-all duration-100 ease-in-out'>
            <div className='bg-gray-200/60  w-fit p-4 rounded-full backdrop-blur-md' onClick={() => setIcon(iconSlide == "playing" ? "pause" : "playing")}>
                {!playValue ? iconPlay : iValue <=4 ? iconPause : iconReplay}
            </div>
            <div id='allProBar' className='bg-gray-200/60 w-60 p-2 rounded-full flex mx-0 backdrop-blur-md gap-6 px-5'>
                <div id='proBar1' onClick={()=>setIValue(0)}  className='w-2 h-2  rounded-full bg-gray-500 my-auto relative mx-auto'>
                    <div className='w-0 h-full  rounded-full bg-gray-800'></div>
                </div>
                <div id='proBar2' onClick={()=>setIValue(1)} className='w-2 h-2 rounded-full bg-gray-500  my-auto relative mx-auto'>
                    <div className='w-0 h-full   rounded-full bg-gray-800'></div>
                </div>
                <div id='proBar3' onClick={()=>setIValue(2)}  className='w-2 h-2 rounded-full bg-gray-500  my-auto relative mx-auto'>
                    <div className='w-0 h-full   rounded-full bg-gray-800'></div>
                </div>
                <div id='proBar4' onClick={()=>setIValue(3)}  className='w-2 h-2 rounded-full bg-gray-500  my-auto relative mx-auto'>
                    <div className='w-0 h-full   rounded-full bg-gray-800'></div>
                </div>
                <div id='proBar5' onClick={()=>setIValue(4)}  className='w-2 h-2 rounded-full bg-gray-500 my-auto relative mx-auto'>
                    <div className='w-0 h-full   rounded-full bg-gray-800'></div>
                </div>
               
                
            </div>
        </div>
    </section>
  )
}

export default Highlights
