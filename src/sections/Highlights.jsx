import React from 'react'
import assets from '../assets/assets'
import ReactPlayer from 'react-player'
import { DotIcon, PlayCircleIcon, PlayIcon } from 'lucide-react'



const Highlights = () => {
  return (
    <section className='h-[120vh] w-[100%]'>
        <div>
            <h1 className='text-6xl font-semibold mx-20 mt-40'>Get the highlights.</h1>
        </div>
        <div className='flex overflow-hidden gap-4 p-20'>
            <div className={`h-[90vh] min-w-[100%] bg-center bg-cover mx-auto my-10 rounded-4xl p-10`} 
            style={{backgroundImage:`url(`+assets.highLightsImage1+`)`,backgroundSize:'110%'}}>
                <p className='text-2xl w-100 font-bold text-white'>
                    The first iPhone designed for Apple Intelligence. Personal, private, powerful.1
                </p>
            </div>
            <div className={`h-[90vh] min-w-[100%] mx-auto my-10`} >
               <ReactPlayer className='rounded-4xl z-10' style={{height:'90vh',width:'100%',objectFit:'cover'}} src={assets.highlightsVideo} playing={true} muted={true} />
               <p className='text-3xl w-150 font-semibold z-50  -mt-155 mx-20'>
                    Camera Control. Get the perfect photo. While barely lifting a finger.
                </p>
            </div>
        </div>
        <div className='w-fit mx-auto z-100 left-1/2 bottom-10 transform -translate-x-1/2  flex gap-5 fixed'>
            <div className='bg-gray-200/60  w-fit p-4 rounded-full backdrop-blur-md'>
                <PlayIcon fill='black' />
            </div>
            <div className='bg-gray-200/60 w-fit p-2 rounded-full flex mx-0 backdrop-blur-md'>
                <DotIcon className='text-gray-500 w-10 h-10'/>
                <DotIcon className='text-gray-500 w-10 h-10'/>
                <DotIcon className='text-gray-500 w-10 h-10'/>
                <DotIcon className='text-gray-500 w-10 h-10'/>
                <DotIcon className='text-gray-500 w-10 h-10'/>
            </div>
        </div>
    </section>
  )
}

export default Highlights
