import React from 'react'
import {search,bell,Ellipse} from "../../common/index"

const ComponentNav = () => {
  return (
   <>
    <div className="flex   justify-between ">
    
    <ul className='flex p-[4px] gap-[1vw]'>
          <li>Movies</li>
          <li>Series</li>
          <li>Documentations</li>
      </ul>
     <div className='flex p-[4px] gap-[1vw]'>
        <img src={search}/>
        <img src={bell}/>
        <img src={Ellipse}/>
        <span>Tetiana</span>
     </div>
  </div>
   </>
  )
}

export default ComponentNav
