import { section } from 'framer-motion/client'
import React from 'react'

const AppleIntel = () => {
  return (
    <section className='w-screen min-h-screen'>
        <img className='lg:w-140 w-70 mx-auto' src="https://www.apple.com/v/iphone-16/f/images/overview/apple-intelligence/hero_apple_intelligence_headline__cmswkbn7y6j6_large_2x.png" alt="" />
        <h2 className='text-4xl font-semibold text-center'>AI‑opening possibilities.</h2>
        <p className='text-gray-500 text-center my-10 lg:mb-20 mb-10'>Available now1</p>
        <img className='w-180 mx-auto' src='https://www.apple.com/in/iphone-16/images/overview/apple-intelligence/apple_intelligence_endframe__ewm1810mnb0i_large_2x.jpg' />
    </section>
  )
}

export default AppleIntel
