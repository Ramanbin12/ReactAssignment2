import React, { useContext ,useState} from 'react'
import {heart1,search,bell,Ellipse} from "../../common/index"
import ComponentNav from '../ComponentNav/ComponentNav'
import MenuContext from '../ComponentNavbar/ComponentNavbar'
const UpperNavbar = () => {
  // const menuVisible=useContext(MenuContext)
  // const[width,setWidth]=useState(100)
  return (
   <>
   <div className=' flex  h-[455px] justify-between flex-col text-white bg-black '>
   <ComponentNav/>
    <div className='leading-relaxed'>
      <h2 className="text-5xl font-bold font-poppins ">Insider</h2>
      <p>2022 | Comedy horror | 1 Season</p>
      <div className='flex gap-[10px]'>
        <button className="px-[24px] py-[17px] bg-purple-600 rounded-[14px]">Watch now</button>
        <button className='p-[15px] bg-white rounded-[14px]'><img src={heart1}/></button>
      </div>
    </div>
   </div>
   </>
  )
}

export default UpperNavbar
