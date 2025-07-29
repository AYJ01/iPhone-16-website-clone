import React from 'react'
import ReactPlayer from 'react-player'
import assets from '../assets/assets'

const IntDetails = () => {
  return (
    <section className='w-screen h-fit bg-[#F1F3FB]'>
        <div>
            <p className='lg:w-150 text-gray-500 text-xl font-semibold text-center mx-auto p-10'>
            iPhone 16 is built for Apple Intelligence, 
            the personal intelligence system that helps 
            you <span className='text-black'>write, express yourself and get things <br />
            done effortlessly</span>. With groundbreaking privacy 
            protections, it gives you peace of mind that 
            no one else can access your data <br />
             — not even Apple.
            </p>
        </div>
        <div className='pb-100'>
            <div className='lg:flex lg:px-65 lg:opacity-1 opacity-0'>
                <h3 className='text-lg text-gray-500 mx-auto'>Boost your productivity</h3>
                <h3 className='text-lg text-gray-500 mx-auto'>Express yourself visually</h3>
                <h3 className='text-lg text-gray-500 mx-auto'>The start of a new era for Siri</h3>
            </div>
            <h2 className='text-black lg:text-2xl text-xl font-semibold text-center p-14 mb-10'>Explore new tools that help you write, focus, and communicate.</h2>
            <div>
                <div className='lg:flex flex-1 gap-5 items-center lg:px-50 mx-5'>
                    <div className='bg-white h-170 lg:w-150 rounded-3xl w-90 p-10'>
                        <div className='bg-center bg-cover h-140' style={{backgroundImage:"url(https://www.apple.com/v/iphone-16/f/images/overview/apple-intelligence/apple-intelligence_hw__fhknj1my91iu_xsmall_2x.png"}}>
                            <div className='h-100 w-50 mx-auto'>
                                    <ReactPlayer className='min-h-110 w-fit rounded-4xl pt-2 object-center mx-auto' style={{objectFit:'cover'}} src={assets.detailVideo} playing={true} muted={true} />        
                            </div>
                        </div>
                        <p className='text-center lg:text-normal text-sm text-gray-500 font-semibold lg:w-80 w-60 mx-auto -mt-10'>
                        <span className='text-black'>Writing Tools</span> can proofread your text 
                        and rewrite different versions until the tone 
                        and wording are just right, and 
                        summarise selected text with a tap.
                         They’re available nearly everywhere you write, including third-party apps.
                        </p>
                    </div>
                    <div className='lg:h-180 lg:w-150'>
                        <div className='bg-white  lg:w-120 rounded-2xl p-20 lg:mt-5 mt-10'>
                            <p className='text-gray-500 font-semibold text-center lg:text-normal text-sm'>
                                Just hit record in the Notes or Phone app to capture audio 
                            recordings and transcripts. Apple Intelligence generates <span className='text-black'>summaries </span> 
                            of your transcripts, so you can get the most important info at a glance.
                            </p>
                            <img src={assets.vMesg} className='w-full object-cover object-center' alt="" />
                        </div>
                        <div className='bg-white lg:w-120 rounded-2xl text-gray-500 font-semibold text-center mt-5 p-10 pb-0 lg:text-normal text-sm'>
                            <span className='text-black'>Priority messages in Mail</span> elevate time-sensitive messages to the top of your inbox 
                            — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.
                            <img className='h-50 object-cover object-top' src={assets.productivity} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IntDetails
