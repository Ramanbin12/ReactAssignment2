import React,{useContext}from 'react'
import { ComponentContWatch, ComponentTrending, UpperNavbar,AppContext } from '../../components/index'

const ComponentHome = () => {
  const {showNav} =useContext(AppContext)
  return (
    
    <div className={`overflow-x-hidden w-[full] bg-black h-full p-4`}>
      <UpperNavbar/>
    <ComponentTrending/>
    <ComponentContWatch/>
    </div>
  
  )
}

export default ComponentHome
