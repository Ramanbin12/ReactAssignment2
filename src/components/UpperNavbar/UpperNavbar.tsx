import React, { useContext ,useState} from 'react'
import {heart1,search,bell,Ellipse} from "../../common/index"
import {ComponentNav,ComponentButton} from '../index'
// import {MenuContext} from '../ComponentNavbar/ComponentNavbar'
const UpperNavbar = () => {
  // const menuVisible=useContext(MenuContext)
  return (
   <>

   <div className='p-4  flex  h-[455px] justify-between flex-col text-white bg-navimg bg-no-repeat bg-cover '>
   <ComponentNav/>
    <div className='leading-relaxed'>
      <h2 className="text-5xl font-bold font-poppins ">Insider</h2>
      <p>2022 | Comedy horror | 1 Season</p>
      <ComponentButton/>
    </div>
   </div>
   </>
  )
}

export default UpperNavbar
