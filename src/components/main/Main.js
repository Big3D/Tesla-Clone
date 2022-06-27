import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Model3 from './cars/Model3'
import ModelS from './cars/ModelS'
import ModelX from './cars/ModelX'
import ModelY from './cars/ModelY'

export default function Main() {
  return (
    <div>
        <Navbar />
        <div>
        <Model3 />
        <ModelY />
        <ModelS />
        <ModelX />
        </div>
        
    </div>
  )
}


