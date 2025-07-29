import { useState } from 'react'

import './App.css'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Iphones from './sections/Iphones'
import AppleIntel from './sections/AppleIntel'
import IntDetails from './sections/IntDetails'

function App() {

  return (
    <>
      <Hero/>
      <Highlights/>
      <Iphones />
      <AppleIntel />
      <IntDetails />
    </>
  )
}

export default App
